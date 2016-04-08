import React from 'react';
import ReactDOM from 'react-dom';
import Stage from './Stage.jsx';

export default class Stages extends React.Component {
    render() {
        const {stages, start, end, length} = this.props;
        return (
            <div ref="schedule" className="schedule">
                {stages.map((stage, index) => {
                    return <Stage key={stage.id} name={stage.name} startTime={start} totalMinutes={length}/>;
                })}
            </div>
        );
    }
}
