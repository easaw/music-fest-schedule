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

const acts = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_ACT':
            return [
                ...state.stages,
                act(undefined, action)
            ]
        case 'DELETE_ACT':
            return state.acts.filter(
                (stage) => {
                    return stage.id != action.id;
                }
            );
        default:
            return state;
    }
}

export default acts;
