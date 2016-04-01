import React from 'react';
import ReactDom from 'react-dom';
import TimeContainer from './TimeContainer.jsx';
import Moment from 'moment';
import FitText from 'react-fittext';

export default class Schedule extends React.Component {

  render() {
    const totalMinutes = this.props.totalMinutes;
    const stage = this.props.stage;
    const startTime = this.props.startTime;
    const height = this.props.height;
    const dayStyles = {
      fontSize: `${this.props.stageNameSize}px`
    };
    return (
      <div className="stage-column">
          <div className="day" ref="day" styles={dayStyles}>
            {stage.name}
          </div>
        <TimeContainer startTime={startTime} height={height} totalMinutes={totalMinutes} stage={stage}/>
      </div>
    );
  }
}
