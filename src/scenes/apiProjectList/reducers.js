import { handleActions } from 'redux-actions';
import { over, lensPath, pathEq, inc } from 'ramda';

import * as actions from './actions';


/**
 * Initial state
 */

const initialState = {
  apiProjects: [
    {
      name: 'apiproject1',
      title: 'Api project 1',
      type: 'blueprint',
      visibility: 'private',
      author: 'Vladimir Gorej',
      githubConnected: true,
      accessCount: 0,
    },
    {
      name: 'apiproject2',
      title: 'Api project 2',
      type: 'swagger',
      visibility: 'private',
      author: 'Team 1',
      githubConnected: true,
      accessCount: 0,
    },
    {
      name: 'apiproject3',
      title: 'Api project 3',
      type: 'blueprint',
      visibility: 'public',
      author: 'Vladimir Gorej',
      githubConnected: false,
      accessCount: 0,
    },
    {
      name: 'apiproject4',
      title: 'Api project 3',
      type: 'swagger',
      visibility: 'private',
      author: 'Vladimir Gorej',
      githubConnected: false,
      accessCount: 0,
    },
    {
      name: 'apiproject5',
      title: 'Api project 5',
      type: 'swagger',
      visibility: 'private',
      author: 'Team 2',
      githubConnected: false,
      accessCount: 0,
    },
    {
      name: 'apiproject6',
      title: 'Api project 6',
      type: 'swagger',
      visibility: 'public',
      author: 'Vladimir Gorej',
      githubConnected: true,
      accessCount: 0,
    },
    {
      name: 'apiproject7',
      title: 'Api project 7',
      type: 'swagger',
      visibility: 'private',
      author: 'Team 3',
      githubConnected: true,
      accessCount: 0,
    },

  ],
};

/**
 * Case reducers
 */

const incrementAccessCount = (state, action) => {
  const index = state.apiProjects.findIndex(pathEq(['name'], action.payload));
  const isIndexNotFound = index === -1;

  if (isIndexNotFound) { return state }

  const apiProjects = over(lensPath([index, 'accessCount']), inc, state.apiProjects);

  return { ...state, apiProjects };
};


/**
 * Root reducer
 */

export default handleActions({
  [actions.incrementAccessCount]: incrementAccessCount,
}, initialState);
