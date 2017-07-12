/**
 *
 * Github Service Constants
 *
 */

// Location in the store
export const NAMESPACE = 'services/github';

// Trigger a fetch request in sagas
export const MAKE_REQUEST = `${NAMESPACE}/MAKE_REQUEST`;

// Current status of the service
export const NOT_ASKED = `${NAMESPACE}/NOT_ASKED`;
export const LOADING = `${NAMESPACE}/LOADING`;
export const SUCCESS = `${NAMESPACE}/SUCCESS`;
export const FAILURE = `${NAMESPACE}/FAILURE`;
