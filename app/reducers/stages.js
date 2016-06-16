import _ from 'lodash';
import initialState from '../static/state.js';

const stages = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_STAGE':
            {
                const newStage = action.stage;
                let newState = {...state};
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
        case 'ATTACH_ACT':
        {
          const {stageId, actId} = action;
          const newState = {...state};
          state[stageId].acts.push(actId);
          return state;
        }
        case 'DETTACH_ACT':
        {
          const {stageId, actId} = action;
          const newState = {...state};
          newState[actId].acts =  _.filter(state[stageId].acts, (item) => {
            return item != actId;
          });
          return newState;
        }
        default:
            {
                return state;
            }
    }
};

export default stages;
