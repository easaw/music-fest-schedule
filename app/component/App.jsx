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
    window.setTimeout(
      this.setTime(), 60000
    );

  }

  render() {

    return (
      <div className='app-container'>
        <Clock
          time={this.state.currentTime}
        />
        <Schedule
          data={this.state.data}
          time={this.state.currentTime}
        />
      </div>
    );
  }
}
