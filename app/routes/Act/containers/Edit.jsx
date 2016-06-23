import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Edit from '../component/Edit.jsx';
import _ from 'lodash';
import {renameAct} from '../../../actions/index.js'

const mapStateToProps = (state, ownProps) => {
    const {id} = ownProps;
    const act = state.acts[id];
    const stages = _.map(state.stages, (s, index) => {
        return {id: index, name: s.name};
    });
    return {
        dj: act.dj,
        start: act.start,
        end: act.end,
        id: act.id,
        stageId: act.stageId,
        stages: stages
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        renameAct
    }, dispatch);
};

const EditContainer = connect(mapStateToProps, mapDispatchToProps, null)(Edit);

export default EditContainer;
