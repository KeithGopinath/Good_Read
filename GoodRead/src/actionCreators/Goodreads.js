import * as GOODREADS from '../actionTypes/Goodreads';

export function getSearchResults(searchText, pageNo) {
  return {
    type: GOODREADS.GET_SEARCHRESULTS,
    searchText,
    pageNo,
  };
}

export function getSearchResultsSuccess(searchresults) {
  return {
    type: GOODREADS.GET_SEARCHRESULTS_SUCCESS,
    searchresults,
  };
}

export function getSearchResultsFailure(error) {
  return {
    type: GOODREADS.GET_SEARCHRESULTS_FAILURE,
    error,
  };
}
