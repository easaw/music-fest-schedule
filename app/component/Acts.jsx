import React from 'react';
import ReactDom from 'react-dom';
import Moment from 'moment';
import Act from './Act.jsx';

export default class Acts extends React.Component {

    render() {
        const totalMinutes = this.props.totalMinutes;
        const stage = this.props.stage;
        const startTime = this.props.startTime;
        const height = this.props.height;
        const times = stage.times.sort((a, b) => {
            return Moment(a).isBefore(b);
        });

        const minutesToPixels = (min) => {
            return min * (totalMinutes / height);
        }

        return (
            <div className="acts">
                {times.map((time) => {
                    const top = minutesToPixels(Moment.duration(Moment(time.start).diff(Moment(startTime))).asMinutes());
                    const height = minutesToPixels(Moment.duration(Moment(time.end).diff(Moment(time.start))).asMinutes());
                    return (<Act key={time.id} time={time} height={height} top={top}/>);
                })}
            </div>
        );
    }
}
