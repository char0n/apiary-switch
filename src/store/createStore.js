import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';

import reducers from './reducers';


export default (initialState = {}, history) => {
  const middleware = applyMiddleware(routerMiddleware(history));

  return createStore(reducers(), initialState, middleware);
};
