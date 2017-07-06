/**
 *
 * Github Service Reducer
 *
 */

import { NOT_ASKED, LOADING, SUCCESS, FAILURE } from './constants';

function reducer(state = {}, action) {
  switch (action.type) {
    case NOT_ASKED:
      return { status: NOT_ASKED };
    case LOADING:
      return { status: LOADING, params: action.params };
    case SUCCESS:
      return { ...state, status: SUCCESS, results: action.results };
    case FAILURE:
      return { ...state, status: FAILURE, error: action.error };
    default:
      return state;
  }
}

export default reducer;
