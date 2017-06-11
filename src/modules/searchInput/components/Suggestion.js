import React, { PropTypes } from 'react';

import ApiProject from './ApiProject';
import LatestSearch from './LatestSearch';


const Suggestion = suggestion => (
  suggestion.isLatestSearch
    ? <LatestSearch latestSearch={suggestion} />
    : <ApiProject apiProject={suggestion} />
);

Suggestion.propTypes = {
  suggestion: PropTypes.shape().isRequired,
};

export default Suggestion;
