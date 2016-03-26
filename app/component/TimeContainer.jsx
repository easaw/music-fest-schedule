import React from 'react';
import ReactDom from 'react-dom';
import Moment from 'moment';
import Time from './Time.jsx';

export default class TimeContainer extends React.Component {

  render() {
    const totalMinutes = this.props.totalMinutes;
    const stage = this.props.stage;
    const startTime = this.props.startTime;
    const height = this.props.height;
    debugger;
    const times = stage.times.sort((a,b)=> {
      return Moment(a).isBefore(b);
    });
    const timeContainer = {
      height: '100%',
      position: 'relative'
    };

    var pxPerQuarterMin =  15 * height / totalMinutes;
    console.log(`Total pxPerQuarterMin = ${pxPerQuarterMin}`);

    return (
      <div className="time-container" style={timeContainer}>
        {times.map((time) => {
          return (<Time
            key={time.id}
            time={time}
            startTime={startTime}
            pxPerQuarterMin={pxPerQuarterMin}
            />);

        })
}
      </div>
    );
  }

}
