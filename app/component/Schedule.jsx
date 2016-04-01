import React from 'react';
import ReactDOM from 'react-dom';
import Stage from './Stage.jsx';
import _ from 'underscore';
import Moment from 'moment';

export default class Schedule extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      height: "400px",
      stageNameSize: "20px"
    };
    this.stageIds = [];
  }

  handleResize = () => {
    const scheduleHeight = this.refs.schedule.offsetHeight;


    const stageComponents = this.stageIds.map((s)=> {
      return ReactDOM.findDOMNode(this.refs[s]);
    });

    const stageTitles =  stageComponents.map((sc) => {
      return sc.children[0];
    });

    const size =  stageTitles.map((st) =>{
      return st.offsetWidth;
    });

    const stageNameSize = Math.min(...size);

    this.setState({
      height: scheduleHeight,
      stageNameSize: stageNameSize
    });


    debugger;

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
          let ref = `state-${index++}`;
          this.stageIds.push(ref);

          return <Stage
            ref={ref}
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
