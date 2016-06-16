import uuid from 'node-uuid';

class Act{
  constructor(
    dj = "Create a Name",
    start = Date.Now(),
    end = Date.Now() )
    {
      this.id = uuid.v4();
      this.start = start;
      this.end = end;
  }
}

export default Act;
