import Moment from 'moment';

export default (start, end, timeUnit) => {
  Moment(start).diff(end).as(timeUnit);
};
