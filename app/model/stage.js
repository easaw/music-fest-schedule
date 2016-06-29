import uuid from 'node-uuid';
import moment from 'moment';

class Stage{
  constructor(name = 'Name a Stage', date = moment().format()){
    this.id = uuid.v4();
    this.date = date,
    this.name = name,
    this.acts = [];
  }
}


export default Stage;
