import Moment from 'moment';

export default (date) => {
  return Moment(date).format('HH:mm').toString();
};
