import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { redirect } from './middleware/redirect';
import getImage from './middleware/image';
import reducers from './reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk, redirect, getImage)));

export default store;