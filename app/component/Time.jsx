import React from 'react';
import dateFormat from '../formatters/date.js';

export default (props, context) => {
  return (<span styles={props.styles} className="time">
          { dateFormat(props.time)}
        </span>);
};
