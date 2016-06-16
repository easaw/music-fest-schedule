import uuid from 'node-uuid';

class Stage{
  constructor(name = "Name a Stage"){
    this.id = uuid.v4();
    this.name = name;
    this.acts = [];
  }
}


export default Stage;
