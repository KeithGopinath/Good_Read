import * as GOODREADS from '../actionTypes/Goodreads';

const initialState = {
  searchresults: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GOODREADS.GET_SEARCHRESULTS:
      return {
        ...state,
        isLoading: true,
        searchresults: null,
      };
    case GOODREADS.GET_SEARCHRESULTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        searchresults: action.searchresults,
      };
    case GOODREADS.GET_SEARCHRESULTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case GOODREADS.GET_GET_SEARCHRESULTS_BOOKS:
      return {
        ...state,
        isLoading: false,
        books: action.books,
      };
    default:
      return state;
  }
};
