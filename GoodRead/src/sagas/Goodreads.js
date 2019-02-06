import { put, takeLatest } from 'redux-saga/effects';
import envConfig from 'envConfig'; //eslint-disable-line
import * as GOODREADS from '../actionTypes/Goodreads';
import * as searchresultsActionCreators from '../actionCreators/Goodreads';
import { doGet } from '../utils/fetchWrapper';


export function* getSearchresults(action) {
  const { searchText, pageNo } = action;
  try {
    const response = yield doGet(`/search/index.xml?key=1SeSNjNbV1WlpLpkEDytMQ&q=${searchText}&page=${pageNo}&per_page=5`, 'https://www.goodreads.com');
    yield put(searchresultsActionCreators.getSearchResultsSuccess(response));
  } catch (error) {
    yield put(searchresultsActionCreators.getSearchResultsFailure(error));
  }
}

export function* goodreadsWatchers() {
  yield [
    takeLatest(GOODREADS.GET_SEARCHRESULTS, getSearchresults),
  ];
}
