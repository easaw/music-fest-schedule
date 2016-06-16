import { Stage } from '../model/stage.js';

export const addStage = (stage = new Stage()) => {
    return {
        type: 'ADD_STAGE',
        stage: stage
    };
};

export const renameStage = (newName, id) => {
  return {
    type: 'RENAME_STAGE',
    id,
    newName
  };
}

export const deleteStage = (id) => {
  return {
    type: 'DELETE_STAGE',
    id
  };
}

export const attachAct = (stageId, actId) => {
  return {
    type: 'ATTACH_ACT',
    stageId,
    actId
  };
}
