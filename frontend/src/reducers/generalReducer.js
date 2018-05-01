import { combineReducers } from 'redux';
import * as asyncInitialState from 'redux-async-initial-state';
import categories from '../reducers/categories.js';
import post from '../reducers/posts.js';




export default combineReducers({
  categories,
  post,
  asyncInitialState: asyncInitialState.innerReducer
});