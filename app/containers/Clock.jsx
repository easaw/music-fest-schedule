import {connect} from 'react-redux';
import Clock from '../component/Clock.jsx';

const mapStateToProps = (state) => {
    debugger;
    return {time: state.time};
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTick: () => {
            dispatch({type: 'TIME_TICK'});
        }
    };
};

const ClockContainer = connect(mapStateToProps, mapDispatchToProps)(Clock);

export default ClockContainer;
