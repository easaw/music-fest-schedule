import './styles/main.less';
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import scheduleApp from './reducers/index.js';
import App from './component/App.jsx';

let store = createStore(scheduleApp);

render(
    <Provider store={store}>
      <App/>
    </Provider>,
document.getElementById('app')
);
