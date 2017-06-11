import React from 'react';
import { Router } from 'react-router';

import './App.css';
import AppBar from '../AppBar/index';


const App = ({ history, routes, ident }) => (
  <main>
    <AppBar />
    <Router history={history} key={ident}>
      {routes}
    </Router>
  </main>
);

App.propTypes = {
  history: React.PropTypes.shape().isRequired,
  routes: React.PropTypes.shape().isRequired,
  ident: React.PropTypes.number,
};

App.defaultProps = {
  ident: null,
};

export default App;
