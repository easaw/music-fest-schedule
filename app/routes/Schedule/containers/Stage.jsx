import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Stage from '../component/stage.jsx';
import _ from 'lodash';
import {renameStage, attachAct, addAct, deleteStage } from '../../../actions/index.js';
const mapStateToProps = (state, ownProps) => {

    const stage = _.find(state.stages, {id: ownProps.id});
    const isEditing = state.isEditing;
    return {
      name: stage.name,
      id: stage.id,
      isEditing
    };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    renameStage,
    attachAct,
    addAct,
    deleteStage
  }, dispatch);
};

const StageContainer = connect(mapStateToProps, mapDispatchToProps)(Stage);

export default StageContainer;
