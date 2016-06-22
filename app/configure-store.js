import {compose, createStore, combineReducers} from 'redux';
import persistState from 'redux-localstorage'
import * as reducers from './reducers/index.js';
import defaultState from './static/state.js';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';

const paths = ['stages', 'acts'];
const enhancer = compose(
  persistState(paths, /*config*/),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(combineReducers({
    ...reducers,
    routing: routerReducer
}), defaultState, enhancer);

export default store;
