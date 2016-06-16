export const addStage = (text) => {
    return {
        type: 'ADD_STAGE',
        id: uuid.v4(),
        text
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