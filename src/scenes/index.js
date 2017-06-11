import CoreLayout from '../layouts/components/CoreLayout';
import Editor from './editor/containers/Editor';
import apiProjectList from './apiProjectList';


export const createRoutes = () => ({
  path: '/',
  component: CoreLayout,
  indexRoute: {
    onEnter: (nextState, replace) => {
      if (nextState.location.pathname === '/') {
        replace('/editor/apiproject3');
      }
    },
  },
  childRoutes: [
    {
      path: 'editor/:apiProjectName',
      component: Editor,
    },
    apiProjectList,
    // all unknown paths will redirect to /.
    { path: '*', onEnter: (nextState, replace) => replace('/') },
  ],
});

export default createRoutes;
