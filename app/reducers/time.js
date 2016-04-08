import defaultState from '../static/state.js'
const time = (state = defaultState, action) => {
    switch (action.type) {
        case 'TICK':
            return object.assign({}, state, {
                time: date.now()
            });
        default:
            return state.time;
    }
};
