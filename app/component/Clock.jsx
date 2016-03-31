import React from 'react';
import Time from './Time.jsx';
import ReactFitText from 'react-fittext';


export default(props, context) => {
  const styles = {
    fontSize: "19.5vh",
    width: "100%",
    textAlign: "center"
  };
  return (
    <div className="time-container">
        <Time styles={styles} time={props.time}/>
    </div>
  );
};
