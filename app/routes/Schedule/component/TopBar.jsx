import React from 'react';
import Stage from '../../../model/stage'
export default class TopBar extends React.Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        isEditing: false
    }

    static propTypes = {
        addStage: React.PropTypes.func.isRequired,
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

    addStage = () => {
      const stage = new Stage();
      this.props.addStage(stage);
    }

    render() {
        const isEditing = this.props.isEditing;
        return <navbar className="top-bar">
            <div className="nav-buttons">
            <button onClick={this.addStage}>Add Stage</button>
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
