import React from 'react';


export default class Stages extends React.Component {
  constructor(props){
    super(props);
  }

  propTypes: {
    isEditing: React.propTypes.bool
  }

  renderEdit: () => {
    return <span>Edit</span>;
  };

  renderCancelEdit: () => {
    return <span>Done</span>;
  };

  render(){
    const isEditing = this.props.isEditing;
    return isEditing ? renderCancelEdit : renderEdit;
  }
}
