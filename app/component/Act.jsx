import React from 'react';
import ReactDom from 'react-dom';
import Time from './Time.jsx'
import Moment from 'moment';

export default class Act extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const time = this.props.time;

    const startTime = this.props.startTime;
    const height = this.props.height;
    const top = this.props.top;


    const style = {
      height: `${length}px`,
      top: `${top}px`,
      width: "100%"
    };

    return <div className="act" style={style}>
      <div className="time">
          <Time time={time.start}/>
          -
          <Time time={time.end}/>

      </div>
      <div className="e-title" ref="title">
          <span className="dj_name">
            {time.dj}
          </span>
      </div>
      <div></div>
    </div>;
  }
}
