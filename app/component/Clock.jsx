import React from 'react';
import Time from './time.jsx';
import FitText from 'react-fittext';

export default(props, context) => {
  const styles = {width: "100%"};
  return (
    <div className="time-container">
      <FitText>
        <Time styles={styles} time={props.time}/>
      </FitText>
    </div>
  );
};
