export const RenameAct = (newName) => {
  return {
    type: 'RENAME_ACT',
    id: ownProps.id,
    newName
  }
}

export const addAct = (act) => {
  return {
    type: 'ADD_ACT',
    act
  };
}
