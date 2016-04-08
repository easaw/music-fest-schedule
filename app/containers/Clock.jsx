import {connect} from 'react-redux';
import Clock from '../component/Clock.jsx';
import _ from 'lodash';
import Moment from 'moment';

const mapStateToProps = (state) => {
    return {time: state.time};
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTick: id => {
            dispatch({type: 'TIME_TICK'});
        }
    };
};

const ClockContainer = connect(
  mapStateToProps,
  mapDispatchToProps)
(Clock)

export default ClockContainer;
