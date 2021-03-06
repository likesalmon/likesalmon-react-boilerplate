/**
 *
 * Github Service Actions
 *
 */

import {
  MAKE_REQUEST,
  NOT_ASKED,
  LOADING,
  SUCCESS,
  FAILURE,
} from './constants';

/**
 * Kicks off the saga that initiates the request.
 */
export function makeRequest(params) {
  return {
    type: MAKE_REQUEST,
    params,
  };
}

/**
 * Used by the saga to set the status.
 */
export function notAsked() {
  return {
    type: NOT_ASKED,
  };
}

/**
 * Used by the saga to set the status and store params.
 */
export function loading(params) {
  return {
    type: LOADING,
    params,
  };
}

/**
 * Used by the saga to set the status and store results.
 */
export function success(results) {
  return {
    type: SUCCESS,
    results,
  };
}

/**
 * Used by the saga to set the status and store the error.
 */
export function failure(error) {
  return {
    type: FAILURE,
    error,
  };
}
