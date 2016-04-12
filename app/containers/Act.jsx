import {connect} from 'react-redux';
import Stages from '../component/Act.jsx';
import _ from 'lodash';
import Moment from 'moment';

const mapStateToProps = (state, ownProps) => {
    debugger;
    const act = _.find(state.acts, {id: ownProps.act.id});
    const start = _.chain(state.acts).map().minBy('start').value().start;
    const end = _.chain(state.acts).map().maxBy('end').value().end;

    const length = (start && end)
        ? Moment.duration(Moment(end).diff(Moment(start))).asMinutes()
        : 0;

    const startMomenent = Moment(new Date(act.start));
    const startEndDiff = startMomenent.diff(Moment(new Date(start)));
    const actsMinDiff = Moment.duration(startEndDiff).asMinutes();

    const minutesToPixels = (min) => {
        return min * (ownProps.height / length);
    };

    const endMoment = Moment(new Date(act.end));
    const actStartEndDiff = endMoment.diff(startEndDiff);
    const actMinDiff = Moment.duration(actStartEndDiff).asMinutes();
    const actHeight = minutesToPixels(actMinDiff);

    const top = minutesToPixels(actsMinDiff);

    return {act: ownProps.act, top: top, height: actHeight};
};

const ActContainer = connect(mapStateToProps, null)(Stages);

export default ActContainer;
