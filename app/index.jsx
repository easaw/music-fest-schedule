/* import './styles/main.less'; */
import React from 'react';
import {render} from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import * as reducers from './reducers/index.js';
import Schedule from './routes/Schedule/Index.jsx';
import Stage from './routes/Stage/Index.jsx';
import Act from './routes/Act/Index.jsx';
import State from './static/state.js';

const state = State;
const store = createStore(combineReducers({
    ...reducers,
    routing: routerReducer
}), state, window.devToolsExtension
    ? window.devToolsExtension()
    : undefined);

const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
    <Router history={history}>
        <Route path="/" component={Schedule}/>
        <Route path="/stage" component={Stage}/>
        <Route path="/act" component={Act}/>
    </Router>
</Provider>, document.getElementById('app'));
