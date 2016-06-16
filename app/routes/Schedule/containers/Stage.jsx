import { connect } from 'react-redux';
import Stage from '../component/stage.jsx';
import _ from 'lodash';
import {renameStage, attachAct, addAct } from '../../../actions/index.js';
const mapStateToProps = (state, ownProps) => {

    const stage = _.find(state.stages, {id: ownProps.id});
    const isEditing = state.isEditing;
    return {name: stage.name, isEditing};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    renameStage,
    attachAct,
    addAct
  }, dispatch);
};

const StageContainer = connect(mapStateToProps, mapDispatchToProps)(Stage);

export default StageContainer;
