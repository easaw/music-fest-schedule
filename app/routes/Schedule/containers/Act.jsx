import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Stages from '../component/Act.jsx';
import _ from 'lodash';
import { renameAct } from '../../../actions/index.js';
import { timeToPixels, timeDifference } from '../../../helpers';

const mapStateToProps = (state, ownProps) => {
    const {stageStart, stageLength} = ownProps;
    const act = _.find(state.acts, {id: ownProps.id});

    const actLength = timeDifference(act.start, act.end);
    const topLength = timeDifference(stageStart, act.start);
    const mills2Px = timeToPixels(stageLength, ownProps.height);
    const actHeight = mills2Px(actLength);
    const top = mills2Px(topLength);

    const isEditing = state.isEditing;

    return {
      isEditing,
      top: top,
      height: actHeight
    };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      renameAct
  }, dispatch);
};


const ActContainer = connect(mapStateToProps, mapDispatchToProps, null)(Stages);
export default ActContainer;
