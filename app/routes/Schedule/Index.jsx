import React from 'react';
import Clock from './containers/Clock.jsx';
import Stages from './containers/Stages.jsx';
import TopBar from './containers/TopBar.jsx';

export default class Schedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        };
    }

    render() {
        const isEditing = this.state.isEditing;
        return (
            <div className="schedule-container">
                <div className="top-portion">
                    <TopBar/>
                    <Clock/>
                </div>
                <div className="bottom-portion">
                    <Stages />
                </div>
            </div>
        );
    }
}
