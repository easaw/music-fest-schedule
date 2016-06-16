import React from 'react';
import Acts from '../containers/Acts.jsx';
import EditableText from './EditableText.jsx';
import Act from '../../../model/act.js';

export default class Stage extends React.Component {

    static propTypes = {
        name: React.PropTypes.string,
        id: React.PropTypes.string,
        isEditing: React.PropTypes.bool
    };

    handleChange = (event) => {
      let { renameStage, id } =  this.props;
      let newName = event.target.value;
      renameStage(newName, id);

    };
    onDelete = () => {
      const { id, deleteStage } = this.props;
      deleteStage(id);
    };
    onAddAct = () => {
      const { stageId, addAct, attachAct } = this.props.id;
      const act = new Act();
      addAct(act);
      attachAct(stageId, act.id);
    }
    render() {
        const {name, id, isEditing} = this.props;
        return (
            <div className="stage">
                <div className="day">
                    <EditableText
                      isEditing={isEditing}
                      handleChange={this.handleChange}
                      text={name}  />
                    <button
                      onClick={this.onDelete}
                      className="delete-stage">
                      [x]
                    </button>
                    <button
                      onClick={this.onAddAct}
                      className="add-act">
                      [+]
                    </button>
                </div>
                <Acts stageId={id} />
            </div>
        );
    }
}
