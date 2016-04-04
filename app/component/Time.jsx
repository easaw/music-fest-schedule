import React from 'react';
import dateFormat from '../formatters/date.js';

export default (props, context) => {
  return (<span style={props.styles} className="time">
          { dateFormat(props.time) }
        </span>);
};
