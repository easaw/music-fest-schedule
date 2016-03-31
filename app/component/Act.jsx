import React from 'react';
import Time from './Time.jsx'
import Moment from 'moment';
import FitText from 'react-fittext';

export default(props, context) => {

  const time = props.time;
  const startTime = props.startTime;
  const pxPerQuarterMin = props.pxPerQuarterMin;
  const top =
    Moment.duration(
        Moment(time.start).diff(Moment(startTime))
      ).asMinutes() / 15 * pxPerQuarterMin;
  const length =
    Moment.duration(
      Moment(time.end).diff(Moment(time.start))
    ).asMinutes() / 15 * pxPerQuarterMin;

  const style = {
    height: `${length}px`,
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
      <FitText>
      <span className="dj_name">
        {time.dj}
      </span>
      </FitText>
    </div>
    <div></div>
  </div>;
}
