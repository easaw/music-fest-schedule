import React from 'react';
import Stage from '../../../model/stage'
import AppBar from 'react-toolbox/lib/app_bar';
import {Button, IconButton} from 'react-toolbox/lib/button';
import styles from './TopBar.scss';


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
        return <Button flat primary  inverse onClick={this.onToggleEdit}>Done</Button>;
    };

    renderEdit = () => {
        return <Button flat primary inverse onClick={this.onToggleEdit}>Edit</Button>;
    };

    addStage = () => {
      const stage = new Stage();
      this.props.addStage(stage);
    }

    render() {
        const isEditing = this.props.isEditing;
        return <navbar className={styles.top}>
        <AppBar>

            <Button flat secondary inverse onClick={this.addStage}>Add Stage</Button>
                {(() => {
                    if (isEditing) {
                        return this.renderCancelEdit();
                    } else {
                        return this.renderEdit();
                    }
                })()}
            </AppBar>
        </navbar>;
    }
}
