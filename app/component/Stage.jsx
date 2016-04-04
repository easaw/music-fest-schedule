import React from 'react';
import ReactDom from 'react-dom';
import Acts from './Acts.jsx';
import Moment from 'moment';

export default class Stage extends React.Component {

  render() {
    const totalMinutes = this.props.totalMinutes;
    const stage = this.props.stage;
    const startTime = this.props.startTime;
    return (
      <div className="stage">
          <div className="day" refs="day" >
            {stage.name}
          </div>
        <Acts
          startTime={startTime}
          totalMinutes={totalMinutes}
          stage={stage}
        />
      </div>
    );
  }
}
