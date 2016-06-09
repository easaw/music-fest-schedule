import uuid from 'node-uuid';
import _ from 'lodash';
import initialState from '../static/state.js';

const stages = (state = initialState, action) => {
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
              debugger;
              var z = _.omit(state, action.id);
                return _.omit(state, action.id);
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
