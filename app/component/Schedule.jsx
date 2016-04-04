import React from 'react';
import ReactDOM from 'react-dom';
import Stage from './Stage.jsx';


export default class Schedule extends React.Component {

  render() {

    const stages = this.props.data.stages;
    const editing = this.props.editing;
    const time = this.props.time;
    const start = this.props.start;
    const end = this.props.end;
    const length = this.props.length;

    return (
      <div ref="schedule" className="schedule">
        {stages.map((stage,index) => {
          return <Stage
            key={stage.id}
            startTime={start}
            stage={stage}
            totalMinutes={length}
            />;
        })}
      </div>
    );
  }
}
