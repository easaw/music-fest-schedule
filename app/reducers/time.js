const time = (state = Date.now(), action) => {
    debugger;
    switch (action.type) {
        case 'TIME_TICK':
          return Date.now();
        default:
            return state;
    }
};

export default time;
