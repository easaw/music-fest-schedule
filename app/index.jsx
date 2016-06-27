import React from 'react';
import {render} from 'react-dom';
import store from './configure-store.js';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import Schedule from './routes/Schedule/Index.jsx';
import Stage from './routes/Stage/Index.jsx';
import Act from './routes/Act/Index.jsx';
import Styles from './Index.scss';
import appStyles from './App.scss';

const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
    <Router history={history}>
        <Route path="/" component={Schedule}/>
        <Route path="/stage" component={Stage}/>
        <Route path="/act/:id" component={Act}/>
    </Router>
</Provider>
, document.getElementById('app'));
