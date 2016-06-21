import uuid from 'node-uuid';
import moment from 'moment';

class Act{
  constructor(
    dj = "Create a Name",
    start = moment().format(),
    end = moment().format(),
    stageId )
    {
      this.dj = dj;
      this.id = uuid.v4();
      this.stageId = stageId;
      this.start = start;
      this.end = end;
  }
}

export default Act;
