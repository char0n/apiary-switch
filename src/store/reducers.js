import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import searchInputReducer from '../modules/searchInput/reducers';
import apiProjectListReducer from '../scenes/apiProjectList/reducers';


const reducers = asyncReducers => combineReducers({
  // add sync reducers here
  router,
  searchInput: searchInputReducer,
  apiProjectList: apiProjectListReducer,
  ...asyncReducers,
});


export default reducers;
