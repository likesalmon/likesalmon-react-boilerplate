/**
 *
 * Github Service Selectors
 *
 */

import { NAMESPACE } from '../constants';
import {
  makeSelectStatus,
  makeSelectParams,
  makeSelectResults,
  makeSelectError,
} from '../selectors';

describe('Github Service Selectors', () => {
  describe('makeSelectStatus', () => {
    it('should select the status', () => {
      const status = 'SUCCESS';
      const mockedState = {
        [NAMESPACE]: {
          status,
        },
      };

      expect(makeSelectStatus(mockedState)).toBe(status);
    });
  });

  describe('makeSelectParams', () => {
    it('should select the params', () => {
      const params = { username: 'mxstbr' };
      const mockedState = {
        [NAMESPACE]: {
          params,
        },
      };

      expect(makeSelectParams(mockedState)).toBe(params);
    });
  });

  describe('makeSelectResults', () => {
    it('should select the results', () => {
      const results = [{ foo: 'bar' }];
      const mockedState = {
        [NAMESPACE]: {
          results,
        },
      };

      expect(makeSelectResults(mockedState)).toBe(results);
    });
  });

  describe('makeSelectError', () => {
    it('should select the results', () => {
      const error = new Error('Some error');
      const mockedState = {
        [NAMESPACE]: {
          error,
        },
      };

      expect(makeSelectError(mockedState)).toBe(error);
    });
  });
});
