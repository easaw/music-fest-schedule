import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Acts from '../component/Acts.jsx';
import {resize} from '../../../actions/index.js';
import _ from 'lodash';

const mapStateToProps = ( state, ownProps ) => {
    const { stageId } = ownProps;
    const actIds = state.stages[stageId].acts;
    const acts = actIds.map((id) => {
      return state.acts[id];
    });
    const orderedActs  = _.orderBy(acts, ['start'], ['asc']);
    const isEditing = state.isEditing;
    return {
        isEditing,
        acts: orderedActs
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        resize
    }, dispatch);
};

const ActsContainer = connect(mapStateToProps, mapDispatchToProps, null)(Acts);

export default ActsContainer;
