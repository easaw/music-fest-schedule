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

    toggleEditingMode = () => {
        const currentState = this.state.isEditing;
        console.log("toggleEditingMode");
        this.setState({
            isEditing: !currentState
        });
    };

    render() {
        const isEditing = this.state.isEditing;
        return (
            <div className="app-container">
                <TopBar
                  isEditing={isEditing}
                  onToggleEdit={this.toggleEditingMode}
                  />
                <Clock/>
                <Stages isEditing={isEditing}/>
            </div>
        );
    }
}
