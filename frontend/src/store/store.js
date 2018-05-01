import { createStore, applyMiddleware} from 'redux';
import combineReducers from "../reducers/generalReducer.js";
import thunk from 'redux-thunk';
import {getPreDefinedData, TodoAPIUtil, fetchTodos}from "../actions/loadDataFromServer";





const store = createStore(
  		combineReducers,
  		applyMiddleware(thunk)
	);
store.dispatch(fetchTodos());

export default store;