import React from 'react';
import { Router } from 'react-router';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import './App.css';
import AppBar from '../AppBar/index';


const fabStyle = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed',
};


const App = ({ history, routes, ident }) => (
  <section className="app">
    <AppBar />
    <section style={{ paddingTop: 64 }}>
      <Router history={history} key={ident}>
        {routes}
      </Router>
      <FloatingActionButton secondary style={fabStyle}>
        <ContentAdd />
      </FloatingActionButton>
    </section>
  </section>
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
