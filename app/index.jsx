import './styles/main.less';
import React from 'react';
import {render} from 'react-dom';
import {createStore, combineReducers, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import reducers from './reducers/index.js';
import App from './component/App.jsx';
import State from './static/state.js';

const state = State();
const store = createStore(
    combineReducers({ 
        ...reducers, 
        routing: routerReducer
    }), 
    state, 
    window.devToolsExtension
    ? window.devToolsExtension()
    : undefined);
const history = syncHistoryWithStore(browserHistory,  store);

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App} />
        </Router>
</Provider>, document.getElementById('app'));
