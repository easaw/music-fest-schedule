import React from 'react';
import ReactDom from 'react-dom';
import Moment from 'moment';
import Act from './Act.jsx';

export default class Acts extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
          height: 0
        });
    }

    minutesToPixels = (min) => {
        return min * (this.state.height / this.props.totalMinutes);

    };

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
        const startTime = this.props.startTime;
        const times = this.props.stage.times.sort((a, b) => {
            return Moment(a).isBefore(b);
        });

        return (
            <div className="acts">
                {times.map((time) => {
                    const top = this.minutesToPixels(Moment.duration(Moment(time.start).diff(Moment(startTime))).asMinutes());
                    const height = this.minutesToPixels(Moment.duration(Moment(time.end).diff(Moment(time.start))).asMinutes());
                    return (<Act key={time.id} time={time} height={height} top={top}/>);
                },this)}
            </div>
        );
    }
}
