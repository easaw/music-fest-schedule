import {connect} from 'react-redux';
import Stages from '../component/Act.jsx';
import _ from 'lodash';
import { timeToPixels, timeDifference } from '../../../helpers';

const mapStateToProps = (state, ownProps) => {
    const act = _.find(state.acts, {id: ownProps.act.id});
    const stageStart = _.chain(state.acts).map().minBy('start').value().start;
    const stageEnd = _.chain(state.acts).map().maxBy('end').value().end;
    const stageLength = timeDifference(stageStart, stageEnd);
    const actLength = timeDifference(act.start, act.end);
    const topLength = timeDifference(stageStart, act.start);
    const mills2Px = timeToPixels(stageLength, ownProps.height);
    const actHeight = mills2Px(actLength);
    const top = mills2Px(topLength);

    return {act: ownProps.act, top: top, height: actHeight};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeActName: (newName) => {
            dispatch({type: 'RENAME_ACT', id: ownProps.act.id, newName});
        }
    };
};


const ActContainer = connect(mapStateToProps, mapDispatchToProps, null)(Stages);
export default ActContainer;
