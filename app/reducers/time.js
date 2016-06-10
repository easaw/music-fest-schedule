import initialState from '../static/state.js';
const time = (state = initialState, action) => {
    switch (action.type) {
        case 'TIME_TICK':
          return Date.now();
        default:
            return state;
    }
};

export default time;
