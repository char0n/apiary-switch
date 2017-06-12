import { createSelector } from 'reselect';
import { includes, filter, orderBy } from 'lodash/fp';
import { pipe, map, assocPath, concat, reverse, objOf, takeLast, length, prop, trim, toLower } from 'ramda';

import { apiProjectsSelector } from '../../scenes/apiProjectList/selectors';


/**
 * Input selectors
 */

export function querySelector(state) {
  return state.searchInput.query;
}

export function searchQueriesSelector(state) {
  return state.searchInput.searchQueries;
}


/**
 * Combined selectors
 */

export const normalizedQuerySelector = createSelector(
  querySelector,
  pipe(trim, toLower)
);

export const normalizedQueryLengthSelector = createSelector(
  normalizedQuerySelector,
  length
);

export const apiProjectsMatchingQuerySelector = createSelector(
  normalizedQuerySelector,
  normalizedQueryLengthSelector,
  apiProjectsSelector,
  (query, queryLength, apiProjects) => {
    if (queryLength === 0) { return takeLast(5, apiProjects) }

    return pipe(
      filter(pipe(prop('title'), trim, toLower, includes(query))),
      takeLast(5)
    )(apiProjects);
  }
);

export const suggestionsSelector = createSelector(
  normalizedQuerySelector,
  searchQueriesSelector,
  apiProjectsMatchingQuerySelector,
  (query, searchQueries, apiProjectsMatchingQuery) => {
    let searchQueriesSuggestions = [];


    if (query === '') {
      searchQueriesSuggestions = pipe(
        takeLast(2),
        reverse,
        map(objOf('title')),
        map(assocPath(['isLatestSearch'], true))
      )(searchQueries);
    }

    const apiProjectsSuggestions = pipe(
      map(assocPath(['isLatestSearch'], false)),
      orderBy(['lastAccessTime', 'title'], ['desc', 'asc'])
    )(apiProjectsMatchingQuery);

    return concat(searchQueriesSuggestions, apiProjectsSuggestions);
  }
);
