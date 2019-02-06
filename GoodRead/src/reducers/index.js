import { combineReducers } from 'redux';
import goodreads from './Goodreads';

const rootReducer = combineReducers({
  goodreadsState: goodreads,
});

export default rootReducer;
