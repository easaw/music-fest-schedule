import React from 'react';
import Input from 'react-toolbox/lib/input';

const EditableText =  ({isEditing, handleChange, text, className, styles, label}) => {
    if (isEditing) {
      return <Input
        className={className}
        styles={styles}
        type="text"
        label={label}
        defaultValue={text}
        onChange={handleChange} />;
    } else {
      return <span className={className}>{text}</span>;
    }
};


EditableText.propTypes = {
  isEditing: React.PropTypes.bool.isRequired,
  handleChange: React.PropTypes.func.isRequired,
  text: React.PropTypes.string.isRequired,
  className: React.PropTypes.string,
  styles: React.PropTypes.object,
  label: React.PropTypes.string,
};

export default EditableText
