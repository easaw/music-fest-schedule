import React from 'react';
import Clock from './containers/Clock.jsx';
import Stages from './containers/Stages.jsx';
import TopBar from './containers/TopBar.jsx';
import Styles from './Index.scss';

export default class Schedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        };
    }

    render() {
        return (
            <div className={Styles.stagesContainer}>
                <div className={Styles.top}>
                    <TopBar/>
                    <Clock/>
                </div>
                <div className={Styles.bottom}>
                    <Stages />
                </div>
            </div>
        );
    }
}
