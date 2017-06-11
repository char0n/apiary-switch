import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Search from '../components/Search';
import { filterSuggestions, rememberSearchQuery } from '../actions';
import { querySelector, suggestionsSelector } from '../selectors';


const mapStateToProps = state => ({
  query: querySelector(state),
  suggestions: suggestionsSelector(state),
});

const mapDispatchToProps = dispatch => ({
  onGotoEditor: apiProjectName => dispatch(push(`/editor/${apiProjectName}`)),
  onGotoApiProjectList: () => dispatch(push('/apiprojects')),
  onFilterSuggestions: query => dispatch(filterSuggestions(query)),
  onRememberSearchQuery: query => dispatch(rememberSearchQuery(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
