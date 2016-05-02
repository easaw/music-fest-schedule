import React from 'react';
import Clock from './containers/Clock.jsx';
import Stages from './containers/Stages.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div className="app-container">
                <Clock/>
                <Stages/>
            </div>
        );
    }
}
