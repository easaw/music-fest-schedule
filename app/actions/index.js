export * from 'acts.js';
export * from 'stage.js';

export const timeTick = () => {
    return {
        type: 'TIME_TICK'
    };
};

export const toggleEditing = () => {
  return {
    type: 'TOGGLE_EDITING'
  };
}

export const resize = (newHeight) => {
    return {
        type: 'RESIZE',
        newHeight: newHeight
    };
};
