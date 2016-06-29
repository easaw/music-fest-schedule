import { Act } from '../model/act';

export const renameAct = (id, newName) => {
  return {
    type: 'RENAME_ACT',
    id: id,
    newName
  };
};

export const addAct = (act = new Act()) => {
  return {
    type: 'ADD_ACT',
    act
  };
};
