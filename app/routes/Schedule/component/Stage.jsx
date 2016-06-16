import React from 'react';
import Acts from '../containers/Acts.jsx';
import  EditableText from './EditableText.jsx';
import { Act } from '../../../model/act.js';

export default class Stage extends React.Component {

    static propTypes = {
        name: React.PropTypes.string,
        id: React.PropTypes.string,
        isEditing: React.PropTypes.bool
    };

    handleChange = (event) => {
      let handleChange =  this.props.changeStageName;
      let newName = event.target.value;
      handleChange(newName);

    };
    onDelete = () => {
      const stageId = this.props.id;
      this.props.deleteStage(stageId);
    };
    onAddAct = () => {
      const stageId = this.props.id;
      const act = Act();
      this.props.addAct(act);
      this.props.attachAct(act.id, stageId);
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
