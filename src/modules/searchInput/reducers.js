import { handleActions } from 'redux-actions';

import * as actions from './actions';

/**
 * Initial state
 */

const initialState = {
  searchQueries: [
    'search query 1',
    'search query 2',
  ],
  query: '',
};


/**
 * Case reducers
 */

const filterSuggestions = (state, action) => ({ ...state, query: action.payload });

const rememberSearchQuery = (state, action) => {
  const isQueryEmpty = action.payload.trim() === '';

  if (isQueryEmpty) { return state }

  const searchQueries = state.searchQueries.concat(action.payload);

  return { ...state, searchQueries };
};


/**
 * Root reducer
 */

export default handleActions({
  [actions.filterSuggestions]: filterSuggestions,
  [actions.rememberSearchQuery]: rememberSearchQuery,
}, initialState);
