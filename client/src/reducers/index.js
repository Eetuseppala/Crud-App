import { combineReducers } from 'redux';
import posts from './posts';

export default combineReducers({ posts });

//Reducers take dispatched actions and the previous state of the application. Then, reducers return the new state of the application.