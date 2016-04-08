import defaultState from '../static/state.js'
const act = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_ACT':
            return {
                id: action.id,
                name: action.name
            }
        default:
            return state;
    }
};

const acts = (state = {
    acts: [],
    height: 0
}, action) => {
    switch (action.type) {
        case 'RESIZE':
            return Object.assign({}, state, {
                height: action.newSize
            });
        case 'ADD_ACT':
            return [
                ...state.stages,
                act(undefined, action)
            ]
        case 'DELETE_ACT':
            return state.acts.filter(
                (act) => {
                    return act.id != action.id;
                }
            );
        default:
            return state;
    }
}

export default acts;
