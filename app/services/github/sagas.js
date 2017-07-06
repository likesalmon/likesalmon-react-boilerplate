/**
 *
 * Github Service Sagas
 *
 */

import { take, call, put } from 'redux-saga/effects';
import request from 'utils/request';
import { MAKE_REQUEST } from './constants';
import { notAsked, loading, success, failure } from './actions';

export function* requestFlow(params) {
  // Set the status to LOADING and store the params
  yield put(loading(params));

  // Select username from store
  // const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${params.username}/repos?type=all&sort=updated`;

  try {
    // Make the request
    const results = yield call(request, requestURL);
    // Set the status to SUCCESS and store the results
    yield put(success(results));
  } catch (err) {
    // Set the status to FAILURE and store the error
    yield put(failure(err));
  }
}

export function* githubServiceFlow() {
  /* eslint-disable no-constant-condition */

  // Set the inital status
  yield put(notAsked());

  while (true) {
    // Watch for MAKE_REQUEST to be dispatched
    const { params } = yield take(MAKE_REQUEST);
    // Make the request
    yield call(requestFlow, params);
  }
}

export default [githubServiceFlow];
