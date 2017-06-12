import React, { PropTypes } from 'react';
import FontIcon from 'material-ui/FontIcon';


const iconStyle = {
  fontSize: '17px',
  marginRight: '10px',
};

const LatestSearch = ({ latestSearch }) => (
  <article className="search-input-latest-search">
    <FontIcon className="fa fa-clock-o" style={iconStyle} />
    {latestSearch.title}
  </article>
);

LatestSearch.propTypes = {
  latestSearch: PropTypes.shape().isRequired,
};

export default LatestSearch;
