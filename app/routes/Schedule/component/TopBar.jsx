import React from 'react';

export default class TopBar extends React.Component {
    constructor(props) {
        super(props);
    };

    propTypes : {
        isEditing: React.propTypes.bool
    };

    renderCancelEdit = () => {
        return <span>Done</span>;
    };

    renderEdit = () => {
        return <span>Edit</span>;
    };

    render() {
        const isEditing = this.props.isEditing;
        debugger;
        return isEditing
            ? renderCancelEdit
            : renderEdit;
    }
}
