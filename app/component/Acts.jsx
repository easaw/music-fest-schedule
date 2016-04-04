import React from 'react';
import ReactDom from 'react-dom';
import Moment from 'moment';
import Act from './Act.jsx';

export default class Acts extends React.Component {

    constructor(props){
      super(props);
      this.state = ({
        height: 0
      });
    }

    componentDidMount() {
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
    }

    handleResize = () => {
      const thisNode = ReactDom.findDOMNode(this);
      const thisHeight = thisNode.offsetHeight;
      this.setState({height: thisHeight});
    };

    render() {
        var z = Moment();
        const totalMinutes = this.props.totalMinutes;
        const stage = this.props.stage;
        const startTime = this.props.startTime;
        const height = this.state.height;

        const times = stage.times.sort((a, b) => {
            return Moment(a).isBefore(b);
        });

        const minutesToPixels = (min) => {
            return min * (height / totalMinutes  );
        }

        return (
            <div className="acts">
                {times.map((time) => {
                    const top = minutesToPixels(Moment.duration(Moment(time.start).diff(Moment(startTime))).asMinutes());
                    const height = minutesToPixels(Moment.duration(Moment(time.end).diff(Moment(time.start))).asMinutes());
                    return (<Act key={time.id} time={time} height={height} top={top}/>);
                })}
            </div>
        );
    }
}
