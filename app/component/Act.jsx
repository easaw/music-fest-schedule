import React from 'react';
import Time from './Time.jsx'
import Moment from 'moment';

export default(props, context) => {

  const time = props.time;
  const startTime = props.startTime;
  const pxPerQuarterMin = props.pxPerQuarterMin;
  //Moment.duration(Moment(end).diff(start)).asMinutes();
  const top = Moment.duration(Moment(time.start).diff(Moment(startTime))).asMinutes() / 15 * pxPerQuarterMin;

  const style = {
    height: "1em",
    top: `${top}px`,
    width: "100%"
  };

  return <div className="act" style={style}>
    <div className="time">
      <Time time={time.start}/>
      &nbsp;
      <Time time={time.end}/>
    </div>
    <div className="e-title">
      <span className="dj_name">
        {time.dj}
      </span>
    </div>
    <div></div>
  </div>;
}
