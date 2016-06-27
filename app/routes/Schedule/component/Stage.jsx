import React from 'react';
import Acts from '../containers/Acts.jsx';
import EditableText from './EditableText.jsx';
import Act from '../../../model/act.js';
import Moment from 'moment';
import Styles from './Stage.scss';

export default class Stage extends React.Component {

    static propTypes = {
        name: React.PropTypes.string,
        id: React.PropTypes.string,
        isEditing: React.PropTypes.bool
    };

    handleChange = (event) => {
        let {renameStage, id} = this.props;
        let newName = event.target.value;
        renameStage(newName, id);

    };
    onDelete = () => {
        const {id, deleteStage} = this.props;
        deleteStage(id);
    };
    onAddAct = () => {
        const {id, addAct, attachAct, stageStart} = this.props;
        const act = new Act();
        act.start = Moment(stageStart).subtract(1, 'h').format();
        act.end = Moment(stageStart).format();
        addAct(act);
        attachAct(id, act.id);
    }
    render() {
        const {name, id, isEditing, stageStart, stageEnd, stageLength} = this.props;
        return (
            <div className={Styles.stage}>
                <div className={Styles.day}>
                    <EditableText isEditing={isEditing} handleChange={this.handleChange} text={name}/>
                    <button onClick={this.onDelete} className={Styles.deleteAct}>
                        [x]
                    </button>
                    <button onClick={this.onAddAct} className={Styles.addAct}>
                        [+]
                    </button>
                </div>
                <Acts stageId={id} stageStart={stageStart} stageEnd={stageEnd} stageLength={stageLength}/>
            </div>
        );
    }
}
