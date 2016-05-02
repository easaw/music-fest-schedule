import React from 'react';
import dateFormat from '../../../formatters/date.js';

export default(props) => {
    return (
        <span style={props.styles} className="time">
            {dateFormat(props.time)}
        </span>
    );
};
