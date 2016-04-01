import React from 'react';
import Time from './Time.jsx';

export default class Clock extends React.Component {

  constructor(props){
    super(props)
  }

  render() {
    const time = this.props.time;
    const styles = {
      fontSize: "19.5vh",
      width: "100%",
      textAlign: "center"
    };
    return (
      <div className="time-container">
        <Time styles={styles} time={time}/>
      </div>
    );
  }
}
