import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Acts from '../component/Acts.jsx';
import {resize} from '../../../actions/index.js';
import _ from 'lodash';

const mapStateToProps = ( state, ownProps ) => {
    const { stageId } = ownProps;
    const acts = _.chain(state.acts).map().filter((act) => {
        return _.includes(_.map(state.stages[stageId].acts), act.id);
    }).orderBy('start').value();
    const isEditing = state.isEditing;
    return {
        isEditing,
        acts: acts
    };
};

const mapDispatchToProps = (dispatch) => {
    debugger;
    const z = dispatch;
    return bindActionCreators({
        resize
    }, dispatch);
};

const ActsContainer = connect(mapStateToProps, mapDispatchToProps, null)(Acts);

export default ActsContainer;
