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
            dispatch({type: 'RENAME_STAGE', id: ownProps.id, newName});
        },
        deleteStage: () => {
          dispatch({type: 'DELETE_STAGE', id: ownProps.id});
        },
        addAct: (id) => {
          dispatch({type: 'ADD_ACT', id: ownProps.id});
        }
    };
};

const StageContainer = connect(mapStateToProps, mapDispatchToProps)(Stage);

export default StageContainer;
