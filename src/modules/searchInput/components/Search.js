import React, { PropTypes } from 'react';
import Autosuggest from 'react-autosuggest';
import { stubTrue, noop } from 'lodash/fp';

import './Search.css';
import Suggestion from './Suggestion';


class Search extends React.Component {
  static stringifySuggestion(suggestion) {
    if (suggestion.isLatestSearch) {
      return suggestion.title;
    }
    return suggestion.name;
  }

  constructor() {
    super();
    // decorators not supported in create-react-app so compensating with this workaround pattern
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onSuggestionsFetchRequested({ value }) {
    if (this.props.query === '' && value.trim() === '') { return }
    this.props.onFilterSuggestions(value);
  }

  onSuggestionSelected(event, { suggestion }) {

    this.props.onRememberSearchQuery(this.props.query);

    if (suggestion.isLatestSearch) {
      this.props.onFilterSuggestions(suggestion.title);
      this.props.onGotoApiProjectList();
    } else {
      this.props.onFilterSuggestions(this.props.query);
      this.props.onGotoEditor(suggestion.name);
    }
  }

  onHandleSubmit(event) {
    event.preventDefault();

    this.props.onRememberSearchQuery(this.props.query);
    this.props.onGotoApiProjectList();
  }

  render() {
    return (
      <form onSubmit={this.onHandleSubmit}>
        <Autosuggest
          suggestions={this.props.suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionSelected={this.onSuggestionSelected}
          onSuggestionsClearRequested={noop}
          shouldRenderSuggestions={stubTrue}
          getSuggestionValue={Search.stringifySuggestion}
          renderSuggestion={Suggestion}
          inputProps={{
            placeholder: 'Search',
            value: this.props.query,
            onChange: noop,
          }}
        />
      </form>
    );
  }
}

Search.propTypes = {
  query: PropTypes.string.isRequired,
  suggestions: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onFilterSuggestions: PropTypes.func.isRequired,
  onRememberSearchQuery: PropTypes.func.isRequired,
  onGotoEditor: PropTypes.func.isRequired,
  onGotoApiProjectList: PropTypes.func.isRequired,
};

export default Search;
