import { handleActions } from 'redux-actions';
import { over, assocPath, pipe, lensPath, pathEq, inc } from 'ramda';

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
      lastAccessTime: Date.now(),
    },
    {
      name: 'apiproject2',
      title: 'Api project 2',
      type: 'swagger',
      visibility: 'private',
      author: 'Team 1',
      githubConnected: true,
      accessCount: 0,
      lastAccessTime: Date.now(),
    },
    {
      name: 'apiproject3',
      title: 'Api project 3',
      type: 'blueprint',
      visibility: 'public',
      author: 'Vladimir Gorej',
      githubConnected: false,
      accessCount: 0,
      lastAccessTime: Date.now(),
    },
    {
      name: 'apiproject4',
      title: 'Api project 3',
      type: 'swagger',
      visibility: 'private',
      author: 'Vladimir Gorej',
      githubConnected: false,
      accessCount: 0,
      lastAccessTime: Date.now(),
    },
    {
      name: 'apiproject5',
      title: 'Api project 5',
      type: 'swagger',
      visibility: 'private',
      author: 'Team 2',
      githubConnected: false,
      accessCount: 0,
      lastAccessTime: Date.now(),
    },
    {
      name: 'apiproject6',
      title: 'Api project 6',
      type: 'swagger',
      visibility: 'public',
      author: 'Vladimir Gorej',
      githubConnected: true,
      accessCount: 0,
      lastAccessTime: Date.now(),
    },
    {
      name: 'apiproject7',
      title: 'Api project 7',
      type: 'swagger',
      visibility: 'private',
      author: 'Team 3',
      githubConnected: true,
      accessCount: 0,
      lastAccessTime: Date.now(),
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

  return pipe(
    over(lensPath(['apiProjects', index, 'accessCount']), inc),
    assocPath(['apiProjects', index, 'lastAccessTime'], Date.now())
  )(state);
};


/**
 * Root reducer
 */

export default handleActions({
  [actions.incrementAccessCount]: incrementAccessCount,
}, initialState);
