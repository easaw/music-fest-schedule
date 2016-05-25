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
        toggleEditing: React.PropTypes.func.isRequired
    };

    onToggleEdit = (event) => {
      this.props.toggleEditing();
    };

    renderCancelEdit = () => {
        return <button onClick={this.onToggleEdit}>Done</button>;
    };

    renderEdit = () => {
        return <button onClick={this.onToggleEdit}>Edit</button>;
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
