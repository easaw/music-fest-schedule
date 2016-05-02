import React from 'react';
import Time from './Time.jsx';

export default class Clock extends React.Component {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        onTick: React.PropTypes.func,
        time: React.PropTypes.number
    }

    static defaultProps = {
        time: Date.now()
    }

    componentDidMount() {
        window.setInterval(() => {
            this
                .props
                .onTick(Date.now());
        }, 60000);
    }

    render() {
        const time = this.props.time;
        return (
            <div className="clock">
                <Time time={time}/>
            </div>
        );
    }
}
