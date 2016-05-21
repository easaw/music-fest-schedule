import React from 'react';

const EditableText =  ({isEditing, handleChange, text, className, styles}) => {
    if (isEditing) {
      return <input
        className={className}
        styles={styles}
        type="text"
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
  styles: React.PropTypes.object
};

export default EditableText
