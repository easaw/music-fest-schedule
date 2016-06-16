import {connect} from 'react-redux';
import Stages from '../component/Act.jsx';
import _ from 'lodash';
import { renameStage } from '../../../model/index.js'
import { timeToPixels, timeDifference } from '../../../helpers';

const mapStateToProps = (state, ownProps) => {
    const act = _.find(state.acts, {id: ownProps.id});
    const stageStart = _.chain(state.acts).map().minBy('start').value().start;
    const stageEnd = _.chain(state.acts).map().maxBy('end').value().end;
    const stageLength = timeDifference(stageStart, stageEnd);
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
      renameStage
  }, dispatch);
};


const ActContainer = connect(mapStateToProps, mapDispatchToProps, null)(Stages);
export default ActContainer;
