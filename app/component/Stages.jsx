import React from 'react';
import Stage from './Stage.jsx';

export default class Stages extends React.Component {
    render() {
        const {stages, start, length} = this.props;
        return (
            <div ref="schedule" className="schedule">
                {stages.map((stage) => {
                    return <Stage key={stage.id} name={stage.name} startTime={start} totalMinutes={length}/>;
                })}
            </div>
        );
    }
}
