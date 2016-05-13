const stage = (state = {
    stages: []
}, action) => {
    switch (action.type) {
        case 'ADD_STAGE':
            return {
                id: action.id,
                name: action.name
            };
        default:
            return state;
    }
};

const stages = (state = {
    stages: []
}, action) => {
    switch (action.type) {
        case 'ADD_STAGE':
            {
                return [
                ...state.stages,
                stage(undefined, action)
            ];
            }
        case 'DELETE_STAGE':
            {
                return state.stages.filter(
                    (stage) => {
                        return stage.id != action.id;
                    }
                );
            }
        case 'RENAME_STAGE':
            {
                const {
                    id,
                    newName
                } = action;
                return state.stages.map((s) => {
                    if (s.id === id) {
                        s.name = newName;
                        return s;
                    } else {
                        return s;
                    }
                });
            }
        default:
            {
                return state;
            }
    }
};

export default stages;
