import React from 'react';
import ReactDom from 'react-dom';
import Time from './Time.jsx'
import Moment from 'moment';
import FitText from 'react-fittext';

export default class Act extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const time = this.props.time;
    const startTime = this.props.startTime;
    const pxPerQuarterMin = this.props.pxPerQuarterMin;
    const top = Moment.duration(Moment(time.start).diff(Moment(startTime))).asMinutes() / 15 * pxPerQuarterMin;
    const length = Moment.duration(Moment(time.end).diff(Moment(time.start))).asMinutes() / 15 * pxPerQuarterMin;

    const style = {
      height: `${length}px`,
      top: `${top}px`,
      width: "100%"
    };

    return <div className="act" style={style}>
      <div className="time">
        <FitText>
          <Time time={time.start}/>
        </FitText>
        <FitText>
          <Time time={time.end}/>
        </FitText>

      </div>
      <div className="e-title" ref="title">
        <FitText compressor={1.2}>
          <span className="dj_name">
            {time.dj}
          </span>
        </FitText>
      </div>
      <div></div>
    </div>;
  }
}
