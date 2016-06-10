import {connect} from 'react-redux';
import Stage from '../component/stage.jsx';
import _ from 'lodash';
const mapStateToProps = (state, ownProps) => {

    const stage = _.find(state.stages, {id: ownProps.id});
    const isEditing = state.isEditing;
    return {name: stage.name, isEditing};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeStageName: (newName) => {
            debugger;
            const result = dispatch({type: 'RENAME_STAGE', id: ownProps.id, newName});
            debugger;
        },
        deleteStage: () => {
          const result = dispatch({type: 'DELETE_STAGE', id: ownProps.id});
                    debugger;
        },
        addAct: (id) => {
         const result =  dispatch({type: 'ADD_ACT', id: ownProps.id});
                   debugger;
        }
    };
};

const StageContainer = connect(mapStateToProps, mapDispatchToProps)(Stage);

export default StageContainer;
