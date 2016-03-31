import React from 'react'
export default class  Controls extends React.Component {
  render (){
    return (
      <div className="control-bar">
        <button
          className="edit-button" 
          onClick={this.props.handleEditClick} >
          Edit
        </button>
    </div>)
  }
}
