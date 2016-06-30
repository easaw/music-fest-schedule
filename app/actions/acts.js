import { Act } from '../model/act';

export const updateAct = (id, newName, newStart, newEnd, newStage) => {
  return {
    type: 'UPDATE_ACT',
    id: id,
    newName,
    newStart,
    newEnd,
    newStage,
  };
};

export const addAct = (act = new Act()) => {
  return {
    type: 'ADD_ACT',
    act
  };
};
