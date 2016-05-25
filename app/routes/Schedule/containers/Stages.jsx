import {connect} from 'react-redux';
import Stages from '../component/Stages.jsx';
import _ from 'lodash';
import Moment from 'moment';

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
    return {
        addStage: () => {
            dispatch({type: 'STAGE_ADD'});
        }
    };
};

const StagesContainer = connect(mapStateToProps, mapDispatchToProps)(Stages);

export default StagesContainer;
