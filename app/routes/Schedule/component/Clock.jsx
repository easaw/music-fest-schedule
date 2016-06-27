import React from 'react';
import Time from './Time.jsx';
import Styles from './Clock.scss';

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
                .timeTick();
        }, 60000);
    }

    render() {
        const time = this.props.time;
        return (
            <div className={Styles.clock}>
                <Time time={time}/>
            </div>
        );
    }
}
