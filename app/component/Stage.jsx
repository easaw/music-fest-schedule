import React from 'react';
import ReactDom from 'react-dom';
import Acts from '../containers/Acts.jsx';
import Moment from 'moment';

export default ({name}) => {
  render() {
    return (
      <div className="stage">
          <div className="day" >
            {name}
          </div>
        <Acts />
      </div>
    );
  }
}
