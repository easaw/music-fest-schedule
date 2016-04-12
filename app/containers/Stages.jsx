import { connect } from 'react-redux';
import Stages from '../component/Stages.jsx';
import _ from 'lodash';
import Moment from 'moment';

const mapStateToProps = (state) => {
    const start = _.chain(state.acts)
          .map()
          .minBy('start')
          .value()
          .start;
    const end = _.chain(state.acts)
          .map()
          .maxBy('end')
          .value()
          .end;

    var m = Moment;
    const length = (start && end) ? Moment.duration(Moment(end).diff(Moment(start))).asMinutes() : 0;

    const stages = _.map(state.stages);

    return {
      stages: stages,
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
