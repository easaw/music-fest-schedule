import React from 'react';
import ReactDOM from 'react-dom';
import Stage from './Stage.jsx';
import _ from 'underscore';
import Moment from 'moment';

export default class Schedule extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      height: "400"
    };
  }

  handleResize = () => {
    const scheduleHeight = this.refs.schedule.offsetHeight;
    debugger;
    this.setState({
      height: scheduleHeight,
    });
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }


  render() {
    const stages = this.props.data.stages;
    const height = this.state.height;
    const stageNameSize = this.state.stageNameSize;
    var start = Moment.min(stages.map((stage) => {
      return Moment.min(stage.times.map((t) => {
        return Moment(t.start);
      }));
    }));

    var end = Moment.max(stages.map((stage) => {
      return Moment.max(stage.times.map((t) => {
        return Moment(t.end);
      }));
    }));

    const length =
      Moment
      .duration(Moment(end).diff(start)).asMinutes();
    console.log(`Event starts at: ${Moment(start).format()} ends at ${Moment(end).format()} with a total length of ${length} minutes`);

    return (
      <div ref="schedule" className="schedule">
        {stages.map((stage,index) => {
          return <Stage
            stageNameSize={stageNameSize}
            key={stage.id}
            height={height}
            startTime={start}
            stage={stage}
            totalMinutes={length}
            />;
        })}
      </div>
    );
  }
}
