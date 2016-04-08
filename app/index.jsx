import './styles/main.less';
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import scheduleApp from './reducers/index.js';
import App from './component/App.jsx';
import State from './static/state.js';

const state = State();
let store = createStore(scheduleApp, state);
render(
    <Provider store={store}>
      <App/>
    </Provider>,
document.getElementById('app')
);
