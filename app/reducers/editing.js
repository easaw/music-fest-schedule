const isEditing = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_EDITING':
          return !state;
        default:
            return state;
    }
};

export default isEditing;
