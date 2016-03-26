import React from 'react';
import Schedule from './Schedule.jsx';
import Time from  '../static/times.js';

const data = Time();


export default class App extends React.Component {
  render() {
    return <Schedule data={data} />;
  }
}
