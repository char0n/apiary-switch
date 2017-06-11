import React, { PropTypes } from 'react';
import FontIcon from 'material-ui/FontIcon';
import classNames from 'classnames';

import './ApiProject.css';


const iconStyle = {
  fontSize: '17px',
  marginRight: '10px',
};

const ApiProject = ({ apiProject }) => (
  <article className="search-input-api-project">
    <header className="search-input-api-project__header">
      <strong>{apiProject.title}</strong>
    </header>
    <div className="search-input-api-project__description">
      {apiProject.author} - {apiProject.name}
    </div>
    <footer className="search-input-api-project__foooter">{apiProject.type}</footer>
    <aside className="search-input-api-project__aside">
      <FontIcon
        className={classNames('fa', {
          'fa-eye': apiProject.visibility === 'public',
          'fa-eye-slash': apiProject.visibility === 'private',
        })}
        style={iconStyle}
      />
      {apiProject.githubConnected && (
        <FontIcon className="fa fa-github" style={iconStyle} />
      )}
    </aside>
  </article>
);

ApiProject.propTypes = {
  apiProject: PropTypes.shape().isRequired,
};

export default ApiProject;
