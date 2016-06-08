import uuid from 'node-uuid';
const initialState = {
    stages: []
}


const stages = (state = initialState.stages, action) => {
    switch (action.type) {
        case 'ADD_STAGE':
            {
                debugger;
                let newState = {...state};
                let newStage = {
                    id: uuid.v4(),
                    name: "Rename Me",
                    acts: []
                };
                newState[newStage.id] = newStage;
                return newState;
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
                const oldStage = state[id];
                let newStage = {...oldStage,
                    name: newName
                };
                let newState = {...state
                };
                newState[id] = newStage;
                return newState;

            }
        default:
            {
                return state;
            }
    }
};

export default stages;
