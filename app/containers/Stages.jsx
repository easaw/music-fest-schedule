import { connect } from 'react-redux';
import Stages from '../component/Stages.jsx';
import _ from 'underscore';
import Moment from 'moment';

const mapStateToProps = (state) => {
  debugger;
    const start = _.min(state.acts, (a) => {a.start});
    const end = _.max(state.acts, (a) => {a.end});
    //const length = Moment(end).diff(Moment(start)).asMinutes();
    return {
      stages: state.stages,
      time: state.time,
      start: start,
      end: end,
      length: length
    };
};

const StageContainer = connect(
  mapStateToProps,
  null,
)(Stages)

export default StageContainer;
