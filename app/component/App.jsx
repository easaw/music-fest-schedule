import React from 'react';
import Schedule from './Schedule.jsx';
import Clock from './Clock.jsx';
import Controls from './Controls.jsx'
import Time from '../static/times.js';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: Time(),
      currentTime: Date.now(),
      editing: false
    };

    this.timeoutIds = [];
  }

  setTime = (time) => {
    this.setState({currentTime: time});
    this.timeoutIds.push(window.setTimeout(this.setTime(Date.now()), 10));
  }

  componentDidMount() {
    this.timeoutIds.push(window.setTimeout(this.setTime(Date.now()), 10));
  }

  handleEditClick = (e) => {
    const toggleEditing = !this.state.editing;
    this.setState({editing: toggleEditing});
  }

  render() {
    return (
      <div className='app-container'>
        <Controls
          handleEditClick={this.handleEditClick}
          editing={this.state.editing} />
        <Clock time={this.state.currentTime} />
        <Schedule
          data={this.state.data}
          editing={this.state.editing}
          time={this.state.currentTime} />
      </div>
    );
  }
}
