import uuid from 'node-uuid';
import moment from 'moment';
import initialState from '../static/state.js';
import update from 'react-addons-update';


const acts = (state = initialState, action) => {
    switch (action.type) {
        case 'RESIZE':
            return Object.assign({}, state, {
                height: action.newSize
            });
        case 'ADD_ACT':
      {
        const act = action.act;
          let newState = {...state};
          newState[act.id] = act;
          return newState;
        }
        case 'DELETE_ACT':
        {
            return state.acts.filter(
                (act) => {
                    return act.id != action.id;
                }
            );
          }
        case 'RENAME_ACT':
        {
          let oldAct = state[action.id];
          let newAct = {...oldAct, dj: action.newName};
          let acs = {...state};
          acs[action.id] = newAct;
          return acs;
        }
        default:
            return state;
    }
};

export default acts;
