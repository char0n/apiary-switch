import { createAction } from 'redux-actions';


/**
 * Action types
 */

export const API_PROJECT_LIST_INCREMENT_ACCESS_COUNT = 'API_PROJECT_LIST_INCREMENT_ACCESS_COUNT';


/**
 * Action creators
 */

export const incrementAccessCount = createAction(API_PROJECT_LIST_INCREMENT_ACCESS_COUNT);
