/**
 *
 * Github Service Sagas Tests
 *
 */

import { take, call, put } from 'redux-saga/effects';
import request from 'utils/request';
import { MAKE_REQUEST } from '../constants';
import { makeRequest, notAsked, loading, success, failure } from '../actions';
import { githubServiceFlow, requestFlow } from '../sagas';

const username = 'mxstbr';

describe('Github Service Sagas', () => {
  describe('githubServiceFlow', () => {
    const gen = githubServiceFlow();

    it('should set the initial status to NOT_ASKED', () => {
      expect(gen.next().value).toEqual(put(notAsked()));
    });

    it('should wait for MAKE_REQUEST to be dispatched', () => {
      expect(gen.next().value).toEqual(take(MAKE_REQUEST));
    });

    it('should call requestFlow with params from the dispatched action', () => {
      const params = { username };
      expect(gen.next(makeRequest(params)).value).toEqual(
        call(requestFlow, params)
      );
    });

    it('should wait for the next MAKE_REQUEST', () => {
      expect(gen.next().value).toEqual(take(MAKE_REQUEST));
    });
  });

  describe('requestFlow', () => {
    describe('success', () => {
      const params = { username };
      const gen = requestFlow(params);

      it('should dispatch LOADING with params', () => {
        expect(gen.next().value).toEqual(put(loading(params)));
      });

      it('should call the request utility', () => {
        const requestURL = `https://api.github.com/users/${params.username}/repos?type=all&sort=updated`;
        expect(gen.next().value).toEqual(call(request, requestURL));
      });

      it('should dispatch SUCCESS with results', () => {
        const results = { foo: 'bar' };
        expect(gen.next(results).value).toEqual(put(success(results)));
      });

      it('should be done', () => {
        expect(gen.next().done).toBe(true);
      });
    });

    describe('failure', () => {
      const params = { username };
      const gen = requestFlow(params);

      it('should dispatch LOADING with params', () => {
        expect(gen.next().value).toEqual(put(loading(params)));
      });

      it('should call the request utility', () => {
        const requestURL = `https://api.github.com/users/${params.username}/repos?type=all&sort=updated`;
        expect(gen.next().value).toEqual(call(request, requestURL));
      });

      it('should dispatch FAILURE with the error', () => {
        const response = new Error('Some error');
        expect(gen.throw(response).value).toEqual(put(failure(response)));
      });

      it('should be done', () => {
        expect(gen.next().done).toBe(true);
      });
    });
  });
});
