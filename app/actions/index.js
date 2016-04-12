import uuid from 'node-uuid';

export const timeTick = () => {
    return {
        type: 'TIME_TICK'
    };
};

export const addStage = (text) => {
    return {
        type: 'ADD_STAGE',
        id: uuid.v4(),
        text
    };
};

export const addAct = (act) => {
    const {
        stageId,
        djName,
        startTime,
        endTime
    } = act;
    return {
        type: 'ADD_STAGE',
        id: uuid.v4(),
        stageId,
        djName,
        startTime,
        endTime
    };
};

export const resize = (newHeight) => {
    return {
        type: 'RESIZE',
        newHeight: newHeight
    };
};
