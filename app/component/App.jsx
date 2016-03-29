import React from 'react';
import Schedule from './Schedule.jsx';
import Clock from './Clock.jsx';
import Time from  '../static/times.js';


export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
                  data: Time(),
                  currentTime: Date.now()
                  };
  }

  setTime = () => {
    this.setState({
      currentTime: Date.now()
    });
  }

  componentDidMount(){
    this.timeOutId =
    window.setTimeOut(
      this.setTime(), 60000
    );

  }

  render() {
    debugger;
    return (
      <div>
        <Clock
          time={this.state.currentTime}
        />
        <Schedule
          data={this.state.currentTime}
          time={this.state.data}
        />
      </div>
    );
  }
}
