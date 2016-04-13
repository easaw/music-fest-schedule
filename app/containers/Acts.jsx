import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import Acts from '../component/Acts.jsx';
import {resize} from '../actions/index.js';
import _ from 'lodash';
import Moment from 'moment';

const mapStateToProps = (state, ownProps) => {
    const {stageId} = ownProps;
    const acts = _.chain(state.acts).map().filter((act) => {
        return _.includes(_.map(state.stages[stageId].acts), act.id);
    }).orderBy('start').value()
    return {
        acts: acts
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreator({
        resize
    }, dispatch);
};

const ActsContainer = connect(mapStateToProps, null,)(Acts);

export default ActsContainer;
