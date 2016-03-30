import React from 'react';
import dateFormat from '../formatters/date.js';

export default (props, context) => {
  return (
    <div className="time-container">
      <span className="time">
        { dateFormat(props.time)}
      </span>
      </div>
  );
};
