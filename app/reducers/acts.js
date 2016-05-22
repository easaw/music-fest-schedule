const act = (state, action) => {
    switch (action.type) {
        case 'ADD_ACT':
            return {
                id: action.id,
                name: action.name
            };
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
            return [
                ...state.stages,
                act(undefined, action)
            ];
        case 'DELETE_ACT':
            return state.acts.filter(
                (act) => {
                    return act.id != action.id;
                }
            );
        case 'RENAME_ACT':
          const acts = _.map(state, (a) => {
            if(a.id == action.id){
              return {...acts, name: action.newName};
            } else {
              return act;
            }
          });
          debugger;
          return acts;
        default:
            return state;
    }
};

export default acts;
