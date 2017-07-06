/**
 *
 * Github Service Actions Tests
 *
 */

import { makeRequest, notAsked, loading, success, failure } from '../actions';
import {
  MAKE_REQUEST,
  NOT_ASKED,
  LOADING,
  SUCCESS,
  FAILURE,
} from '../constants';

describe('Github Service Actions', () => {
  describe('makeRequest', () => {
    it('should set the type to MAKE_REQUEST and the params', () => {
      const expectedResult = { type: MAKE_REQUEST, params: {} };
      expect(makeRequest({})).toEqual(expectedResult);
    });
  });

  describe('notAsked', () => {
    it('should set the type to NOT_ASKED', () => {
      const expectedResult = { type: NOT_ASKED };
      expect(notAsked()).toEqual(expectedResult);
    });
  });

  describe('loading', () => {
    it('should set the type to LOADING and the params', () => {
      const expectedResult = { type: LOADING, params: {} };
      expect(loading({})).toEqual(expectedResult);
    });
  });

  describe('success', () => {
    it('should set the type to SUCCESS and the results', () => {
      const expectedResult = { type: SUCCESS, results: {} };
      expect(success({})).toEqual(expectedResult);
    });
  });

  describe('error', () => {
    it('should set the type to ERROR and the error', () => {
      const expectedResult = { type: FAILURE, error: {} };
      expect(failure({})).toEqual(expectedResult);
    });
  });
});
