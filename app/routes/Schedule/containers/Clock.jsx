import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Clock from '../component/Clock.jsx';
import { timeTick } from '../../../actions/index.js'

const mapStateToProps = (state) => {
    return {time: state.time};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    timeTick
  }, dispatch);
};

const ClockContainer = connect(mapStateToProps, mapDispatchToProps)(Clock);

export default ClockContainer;
