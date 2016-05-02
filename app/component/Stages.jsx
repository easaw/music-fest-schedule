import React from 'react';
import Stage from './Stage.jsx';

export default class Stages extends React.Component {

    static propTypes = {
        stages: React.propTypes.object,
        start: React.propTypes.object,
        length: React.propTypes.number
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
