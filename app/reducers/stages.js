import defaultState from '../static/state.js'

const stage = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_STAGE':
            return {
                id: action.id,
                name: action.name
            }
        default:
            return state;
    }
};

const stages = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_STAGE':
            return [
                ...state.stages,
                stage(undefined, action)
            ]
        case 'DELETE_STAGE':
            return state.stages.filter(
                (stage) => {
                    return stage.id != action.id;
                }
            );
        default:
            return state;
    }
}

export default stages;
