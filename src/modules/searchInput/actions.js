import { createAction } from 'redux-actions';


/**
 * Action types
 */

export const SEARCH_INPUT_FILTER_SUGGESTIONS = 'SEARCH_INPUT_FILTER_SUGGESTIONS';

export const SEARCH_INPUT_REMEMBER_SEARCH_QUERY = 'SEARCH_INPUT_REMEMBER_SEARCH_QUERY';

/**
 * Action creators
 */

export const filterSuggestions = createAction(SEARCH_INPUT_FILTER_SUGGESTIONS);

export const rememberSearchQuery = createAction(SEARCH_INPUT_REMEMBER_SEARCH_QUERY);
