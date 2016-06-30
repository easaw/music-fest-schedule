import initialState from '../static/state.js';


const acts = (state = initialState, action) => {
    switch (action.type) {
        case 'RESIZE':
            return Object.assign({}, state, {
                height: action.newSize
            });
        case 'ADD_ACT':
            {
                const act = action.act;
                let newState = {...state
                };
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
        case 'UPDATE_ACT':
            {
                /*
                newName,
                newStart
                newEnd,
                newStage,
                */
                const {
                    id,
                    newName,
                    newStart,
                    newEnd,
                    newStage
                } = action;

                let oldAct = state[action.id];
                let newAct = {...oldAct,
                    dj: newName,
                    start: newStart,
                    end: newEnd,
                    stage: newStage
                };
                let acs = {...state,
                        [id]: newAct
                };
                acs[action.id] = newAct;
                return acs;
            }
        default:
            return state;
    }
};

export default acts;
