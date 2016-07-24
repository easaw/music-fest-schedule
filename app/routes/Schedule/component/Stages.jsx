import React from 'react';
import Stage from '../containers/Stage.jsx';
import _ from 'lodash';
import Styles from './Stages.scss';

export default class Stages extends React.Component {

    static propTypes = {
        stages: React.PropTypes.object,
        start: React.PropTypes.string,
        length: React.PropTypes.number,
        isEditing: React.PropTypes.bool,
        stageStart: React.PropTypes.string,
        stageEnd: React.PropTypes.string,
        stageLength: React.PropTypes.number
    }

    render() {
        const {stages, start, length, isEditing, stageStart, stageEnd, stageLength} = this.props;
        return (
            <div ref="schedule" className={Styles.stages}>
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
                      stageStart={stageStart}
                      stageEnd={stageEnd}
                      stageLength={stageLength}
                      />;
                })}
            </div>
        );
    }
}
