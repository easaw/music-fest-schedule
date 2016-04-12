import {connect} from 'react-redux';
import Stages from '../component/Act.jsx';
import _ from 'lodash';
import Moment from 'moment';

const mapStateToProps = (state, ownProps) => {

    const start = _.chain(state.acts).map().minBy('start').value().start;
    const end = _.chain(state.acts).map().maxBy('end').value().end;

    const length = (start && end)
        ? Moment.duration(Moment(end).diff(Moment(start))).asMinutes()
        : 0;
    return {
        act: ownProps.act,
        start: start,
        end: end, length: length};
};

const ActContainer = connect(mapStateToProps, null)(Stages);

export default ActContainer;
