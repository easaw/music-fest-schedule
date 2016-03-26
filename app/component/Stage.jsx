import React from 'react';
import ReactDom from 'react-dom';
import TimeContainer from './TimeContainer.jsx';
import Moment from 'moment';

export default class Schedule extends React.Component {

  render() {
    const totalMinutes = this.props.totalMinutes;
    const stage = this.props.stage;
    const startTime = this.props.startTime;
    const height = this.props.height;
    return (
      <div className="stage-column">
        <div className="day">{stage.name}</div>
        <TimeContainer
          startTime={startTime}
          height={height}
          totalMinutes={totalMinutes}
          stage={stage} />
      </div>
    );
  }
}
