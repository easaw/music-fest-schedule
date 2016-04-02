import React from 'react';
import Time from './Time.jsx';

export default class Clock extends React.Component {

  constructor(props){
    super(props)
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
