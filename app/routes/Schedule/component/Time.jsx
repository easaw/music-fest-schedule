import React from 'react';
import dateFormat from '../../../formatters/date.js';

const Time =  (props) => {
    return (
        <span style={props.styles} className={props.className}>
            {dateFormat(props.time)}
        </span>
    );
};

Time.propTypes = {
  styles: React.PropTypes.object,
  time: React.PropTypes.string
};

export default Time;
