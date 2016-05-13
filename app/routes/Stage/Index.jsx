import React from 'react';

export default class Act extends React.Component{
  render(){
    return (
      <div className="stage-form">
        <form action="">
            <label htmlFor="stage-name">
                Stage Name
            </label>
            <input type="text" id="stage-name"></input>

        </form>
      </div>
    );
  }
}
