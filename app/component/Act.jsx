import React from 'react';
import ReactDom from 'react-dom';
import Time from './Time.jsx'
import Moment from 'moment';

export default class Act extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            djNameTextSize: 50
        };
    };

    calculateFontSize = () => {
        let djNameTextSize = this.state.djNameTextSize;
        const djName = this.refs.djName;
        const title = this.refs.title;
        debugger;

        if (djName.offsetHeight >= title.offsetHeight ||
            djName.offsetHeight < title.offsetHeight * .80) {
            djNameTextSize = title.offsetWidth / 8.5; // Magic number I just guessed
            this.setState({djNameTextSize: djNameTextSize});
       }

    };

    componentDidMount = () => {
        this.calculateFontSize();
    };

    componentWillReceiveProps = () => {
      this.calculateFontSize();
    };

    render() {
        const {act, height, top } = this.props;
        const { djNameTextSize } = this.state;

        const actStyle = {
            height: `${height}px`,
            top: `${top}px`,
            width: "100%"
        };

        const djNameStyle = {
            fontSize: djNameTextSize
        }

        return <div className="act" style={actStyle} ref="act">
            <div className="time-container" ref="timeContainer">
                <div className="time">
                    <Time time={act.start}/>
                    -
                    <Time time={act.end}/>
                </div>
            </div>
            <div className="e-title" ref="title">
                <span className="dj_name" style={djNameStyle} ref="djName">
                    {act.dj}
                </span>
            </div>
        </div>;
    };
}
