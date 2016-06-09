import initialState from '../static/state.js';

const isEditing = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_EDITING':
        debugger;
          return !state
        default:
            return state;
    }
};

export default isEditing;
