import { createStore, applyMidddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(roootReducer, initialState, compose(applyMiddleware()));


