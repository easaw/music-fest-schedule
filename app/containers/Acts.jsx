import { connect } from 'react-redux';
import Stages from '../component/Acts.jsx';
import _ from 'lodash';
import Moment from 'moment';

const mapStateToProps = (state) => {
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
