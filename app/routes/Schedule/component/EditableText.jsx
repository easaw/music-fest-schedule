import React from 'react';

const EditableText =  ({isEditing, handleChange, text, className}) => {
    if (isEditing) {
      return <input
        className="className"
        type="text"
        defaultValue={text}
        onChange={handleChange} />;
    } else {
      return <span className={className}>{text}</span>;
    }
};


export default EditableText
