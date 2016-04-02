import React from 'react';
import ReactDom from 'react-dom';
import Acts from './Acts.jsx';
import Moment from 'moment';

export default class Schedule extends React.Component {

  render() {
    const totalMinutes = this.props.totalMinutes;
    const stage = this.props.stage;
    const startTime = this.props.startTime;
    const height = this.props.height;
    return (
      <div className="stage">
          <div className="day" >
            {stage.name}
          </div>
        <Acts
          startTime={startTime}
          height={height}
          totalMinutes={totalMinutes}
          stage={stage}
        />
      </div>
    );
  }
}
