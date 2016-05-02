import React from 'react';
export default class Controls extends React.Component {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        handleEditClick: React.propTypes.func
    }

    render() {
        return (
            <div className="control-bar">
                <button className="edit-button" onClick={this.props.handleEditClick}>
                    Edit
                </button>
            </div>
        );
    }
}
