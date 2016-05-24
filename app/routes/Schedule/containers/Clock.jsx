import {connect} from 'react-redux';
import Clock from '../component/Clock.jsx';
import { timeTick } from '../../../actions/index.js'

const mapStateToProps = (state) => {
    return {time: state.time};
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTick: () => {
            dispatch(timeTick());
        }
    };
};

const ClockContainer = connect(mapStateToProps, mapDispatchToProps)(Clock);

export default ClockContainer;
