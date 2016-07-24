import React from 'react';
import Input from 'react-toolbox/lib/input';

const EditableText =  ({isEditing, handleChange, text, editStyles, displayStyles, label}) => {
    if (isEditing) {
      return <Input
        style={editStyles}
        type="text"
        label={label}
        defaultValue={text}
        onChange={handleChange} />;
    } else {
      return <span style={displayStyles} >{text}</span>;
    }
};


EditableText.propTypes = {
  editStyles: React.PropTypes.object,
    displayStyles: React.PropTypes.object,
  isEditing: React.PropTypes.bool.isRequired,
  handleChange: React.PropTypes.func.isRequired,
  text: React.PropTypes.string.isRequired,
  styles: React.PropTypes.object,
  label: React.PropTypes.string
};

export default EditableText;
