import uuid from 'node-uuid';
import moment from 'moment';

class Act{
  constructor(
    dj = "Create a Name",
    start = moment(),
    end = moment() )
    {
      this.id = uuid.v4();
      this.start = start;
      this.end = end;
  }
}

export default Act;
