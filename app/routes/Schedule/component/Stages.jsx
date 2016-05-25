import React from 'react';
import Stage from '../containers/Stage.jsx';
import _ from 'lodash';

export default class Stages extends React.Component {

    static propTypes = {
        stages: React.PropTypes.array,
        start: React.PropTypes.string,
        length: React.PropTypes.number,
        isEditing: React.PropTypes.bool
    }

    render() {
        const {stages, start, length, isEditing} = this.props;
        return (
            <div ref="schedule" className="schedule">
                {(() => {
                    if (isEditing) {
                        return <button>Add Stage</button>;
                    }
                })}
                {_.values(stages).map((stage) => {
                    return <Stage
                      key={stage.id}
                      name={stage.name}
                      startTime={start}
                      id={stage.id}
                      totalMinutes={length}
                      />;
                })}
            </div>
        );
    }
}
