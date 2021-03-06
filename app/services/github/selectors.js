/**
 *
 * Github Service Selectors
 *
 */

import { createSelector } from 'reselect';
import { prop } from 'ramda';
import { NAMESPACE } from './constants';

const selectService = prop(NAMESPACE);

const makeSelectStatus = createSelector(selectService, prop('status'));

const makeSelectParams = createSelector(selectService, prop('params'));

const makeSelectResults = createSelector(selectService, prop('results'));

const makeSelectError = createSelector(selectService, prop('error'));

export {
  makeSelectStatus,
  makeSelectParams,
  makeSelectResults,
  makeSelectError,
};
