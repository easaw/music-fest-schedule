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
      debugger;
      const styles = Styles;
        const isEditing = this.state.isEditing;
        return (
            <div className={Styles.scheduleContainer}>
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
