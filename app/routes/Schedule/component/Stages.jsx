import React from 'react';
import Stage from './Stage.jsx';

export default class Stages extends React.Component {

    static propTypes = {
        stages: React.PropTypes.array,
        start: React.PropTypes.string,
        length: React.PropTypes.id
    }

    render() {
        const {stages, start, length} = this.props;
        return (
            <div ref="schedule" className="schedule">
                {stages.map((stage) => {
                    return <Stage key={stage.id} name={stage.name} startTime={start} id={stage.id} totalMinutes={length}/>;
                })}
            </div>
        );
    }
}
