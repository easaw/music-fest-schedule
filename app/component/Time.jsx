import React from 'react';
import Clock from './Clock.jsx'
import Moment from 'moment';

export default class Time extends React.Component {

  render() {

    const time = this.props.time;
    const startTime = this.props.startTime;
    const pxPerQuarterMin  = this.props.pxPerQuarterMin;
    //Moment.duration(Moment(end).diff(start)).asMinutes();
    const top =
    Moment.duration(Moment(time.start)
    .diff(Moment(startTime)))
    .asMinutes() / 15 * pxPerQuarterMin;

    const style = {
      height: "1em",
      top: `${top}px`,
      width: "100%"
    };

    return <div className="act" style={style}>
      <div className="time">
        <Clock time={time.start}/>
          &nbsp;
        <Clock  time={time.end} />
      </div>
      <div className="e-title">
        <span className="dj_name">
          {time.dj}
        </span>
      </div>
      <div>
      </div>
    </div>;
  }
}
