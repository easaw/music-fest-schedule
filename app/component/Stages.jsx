import React from 'react';
import ReactDOM from 'react-dom';
import Stage from './Stage.jsx';


export default class Stages extends React.Component {

  render({stages, time, start, end, length}) {
    return (
      <div ref="schedule" className="schedule">
        {stages.map((stage,index) => {
          return <Stage
            key={stage.id}
            startTime={start}
            acts={acts}
            totalMinutes={length}
            />;
        })}
      </div>
    );
  }
}
