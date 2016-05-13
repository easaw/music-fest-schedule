import React from 'react';

export default class TopBar extends React.Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        isEditing: false
    }

    static propTypes = {
        isEditing: React.PropTypes.bool,
        onToggleEdit: React.PropTypes.func.isRequired
    };

    renderCancelEdit = () => {
        const onToggleEdit = this.props.onToggleEdit;
        return <button onClick={onToggleEdit}>Done</button>;
    };

    renderEdit = () => {
        const onToggleEdit = this.props.onToggleEdit;
        return <button onClick={onToggleEdit}>Edit</button>;
    };

    render() {
        const isEditing = this.props.isEditing;
        return <navbar className="top-bar">
            <div className="nav-buttons">
                {(() => {
                    if (isEditing) {
                        return this.renderCancelEdit();
                    } else {
                        return this.renderEdit();
                    }
                })()}
            </div>
        </navbar>;
    }
}
