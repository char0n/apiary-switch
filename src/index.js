import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { useRouterHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import createStore from './store/createStore';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import scenes from './scenes';
import './index.css';


// configure history for react-router
const browserHistory = useRouterHistory(createBrowserHistory)({
  basename: '',
});
const store = createStore(window.__INITIAL_STATE__, browserHistory); // eslint-disable-line no-underscore-dangle
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: state => state.router,
});

const render = (key = null) => {
  const routes = scenes(store);
  return (
    <Provider store={store}>
      <MuiThemeProvider>
        <App history={history} routes={routes} ident={key} />
      </MuiThemeProvider>
    </Provider>
  );
};

ReactDOM.render(render(), document.getElementById('root'));

registerServiceWorker();
