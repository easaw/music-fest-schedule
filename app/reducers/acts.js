import uuid from 'node-uuid';
import moment from 'moment';
import initialState from '../static/state.js';
import update from 'react-addons-update';

const act = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ACT':
          return {
            id: uuid.v4(),
            dj: 'unnamed',
            start: Date.now().toString(),
            end: Date.now().toString()
          }
        default:
            return state;
    }
};

const acts = (state = initialState, action) => {
    switch (action.type) {
        case 'RESIZE':
            return Object.assign({}, state, {
                height: action.newSize
            });
        case 'ADD_ACT':
            const stageId = action.id
            const addAct = act(undefined, action);
            let newActs = {...state.acts};
            newActs[addAct.id] = addAct

            let newStages = {...state.stages};
            newStages[stageId].acts = [stageId];
            state.acts = newActs;
            return {stages: newStages, acts: newActs};
        case 'DELETE_ACT':
            return state.acts.filter(
                (act) => {
                    return act.id != action.id;
                }
            );
        case 'RENAME_ACT':
          let oldAct = state[action.id];
          let newAct = {...oldAct, dj: action.newName};
          let acs = {...state};
          acs[action.id] = newAct;
          return acs;
        default:
            return state;
    }
};

export default acts;
