import React from 'react';
import MdAppBar from 'material-ui/AppBar';

import './AppBar.css';
import Search from '../../modules/searchInput/containers/Search';


const AppBar = () => (
  <MdAppBar
    title="Apiary"
    className="app-bar"
    style={{ position: 'fixed' }}
    showMenuIconButton={false}
  >
    <Search />
  </MdAppBar>
);

export default AppBar;

