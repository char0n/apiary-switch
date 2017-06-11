import { handleActions } from 'redux-actions';

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
    },
    {
      name: 'apiproject2',
      title: 'Api project 2',
      type: 'swagger',
      visibility: 'private',
      author: 'Team 1',
      githubConnected: true,
    },
    {
      name: 'apiproject3',
      title: 'Api project 3',
      type: 'blueprint',
      visibility: 'public',
      author: 'Vladimir Gorej',
      githubConnected: false,
    },
    {
      name: 'apiproject4',
      title: 'Api project 3',
      type: 'swagger',
      visibility: 'private',
      author: 'Vladimir Gorej',
      githubConnected: false,
    },
    {
      name: 'apiproject5',
      title: 'Api project 5',
      type: 'swagger',
      visibility: 'private',
      author: 'Team 2',
      githubConnected: false,
    },
    {
      name: 'apiproject6',
      title: 'Api project 6',
      type: 'swagger',
      visibility: 'public',
      author: 'Vladimir Gorej',
      githubConnected: true,
    },
    {
      name: 'apiproject7',
      title: 'Api project 7',
      type: 'swagger',
      visibility: 'private',
      author: 'Team 3',
      githubConnected: true,
    },

  ],
};

export default handleActions({

}, initialState);
