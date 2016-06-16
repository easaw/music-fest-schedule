import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import Moment from 'moment';
import {
  addStage,
  renameStage,
  deleteStage,
  attachAct,
  addAct
} from '../../../actions/index.js';
import Stages from '../component/Stages.jsx';


const mapStateToProps = (state) => {
    let start, end, length;
    if (state.acts) {
        start = _.chain(state.acts).map().minBy('start').value().start;
        end = _.chain(state.acts).map().maxBy('end').value().end;
        length = (start && end)
            ? Moment.duration(Moment(end).diff(Moment(start))).asMinutes()
            : 0;
    }

    const stages = _.mapValues(state.stages);

    const isEditing = state.isEditing;

    return {
      isEditing,
      stages: stages,
      time: state.time,
      start: start || 0,
      end: end || 0,
      length: length || 0};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addStage,
    renameStage,
    deleteStage,
    attachAct,
    addAct
  }, dispatch);
};

const StagesContainer = connect(mapStateToProps, mapDispatchToProps)(Stages);

export default StagesContainer;
