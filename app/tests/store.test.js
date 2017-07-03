/**
 * Test store addons
 */

import { browserHistory } from 'react-router';
import configureStore from '../store';

describe('configureStore', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  describe('asyncReducers', () => {
    it('should contain an object for async reducers', () => {
      expect(typeof store.asyncReducers).toBe('object');
    });
  });

  describe('runSaga', () => {
    it('should contain a hook for `sagaMiddleware.run`', () => {
      expect(typeof store.runSaga).toBe('function');
    });
  });

  describe('freeze middleware', () => {
    it('should throw if an object from the store is mutated', () => {
      const language = store.getState().language;
      const mutate = (obj, prop, value) => (obj[prop] = value); // eslint-disable-line no-param-reassign
      expect(mutate(language, 'locale', 'foo')).toThrow();
    });
  });
});
