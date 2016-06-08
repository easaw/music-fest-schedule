import uuid from 'node-uuid';
import moment from 'moment';

const act = (state, action) => {
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
            const addAct = act(undefined, action);
            return state;
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
