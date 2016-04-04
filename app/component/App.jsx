import React from 'react';
import Schedule from './Schedule.jsx';
import Clock from './Clock.jsx';
import Controls from './Controls.jsx'
import Time from '../static/times.js';
import _ from 'underscore';
import Moment from 'moment';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    const time = Time();
    const start = Moment.min(time.stages.map((s) => {
      return Moment.min(s.times.map((t) => {
        return Moment(t.start);
      }));
    }));

    var end = Moment.max(time.stages.map((s) => {
      return Moment.max(s.times.map((t) => {
        return Moment(t.end);
      }));
    }));

    const length =
      Moment
      .duration(Moment(end).diff(start)).asMinutes();


    this.state = {
      data: time,
      currentTime: Date.now(),
      editing: false,
      start: start,
      end: end,
      length: length
    };
  }


  componentDidMount() {
    window.setInterval(
      () => this.setState({currentTime: Date.now()}),
      1000);
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
          time={this.state.currentTime}
          start={this.state.start}
          end={this.state.end}
          length={this.state.length} />
      </div>
    );
  }
}
