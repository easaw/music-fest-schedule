import uuid from 'node-uuid';
import {
    Schema,
    arrayOf,
    normalize
} from 'normalizr';


export default () => {
    let results = normalize(result, {
        stages: arrayOf(stage)
    });
    let state = Object.assign({}, {
        stages: results.entities.stages,
        acts: results.entities.acts
    });
    return state;
};

const act = new Schema('acts', {
    idAttribue: 'id'
});

const stage = new Schema('stages', {
    idAttribue: 'id'
});

stage.define({
    acts: arrayOf(act)
});





const result = {
    stages: [{
        id: uuid.v4(),
        name: "Energy",
        acts: [{
            id: uuid.v4(),
            dj: "Michael Constable B2B Theo Hansen",
            start: "2016-02-13T20:00",
            end: "2016-02-13T21:30"
        }, {
            id: uuid.v4(),
            dj: "Wicked Science",
            start: "2016-02-13T21:30",
            end: "2016-02-13T22:45"
        }, {
            id: uuid.v4(),
            dj: "ANEVO",
            start: "2016-02-13T22:45",
            end: "2016-02-14T00:00"
        }, {
            id: uuid.v4(),
            dj: "KSHMR",
            start: "2016-02-14T00:00",
            end: "2016-02-14T01:15"
        }, {
            id: uuid.v4(),
            dj: "Dimitri Vegas & Like Mike",
            start: "2016-02-14T01:15",
            end: "2016-02-14T02:30"
        }]
    }, {
        id: uuid.v4(),
        name: "Bass",
        acts: [{
            id: uuid.v4(),
            dj: "Pill Dickle",
            start: "2016-02-13T20:00",
            end: "2016-02-13T21:00"
        }, {
            id: uuid.v4(),
            dj: "Random Hero B2B Jabonesio",
            start: "2016-02-13T21:00",
            end: "2016-02-13T22:00"
        }, {
            id: uuid.v4(),
            dj: "Flatland funk",
            start: "2016-02-13T22:00",
            end: "2016-02-13T23:00"
        }, {
            id: uuid.v4(),
            dj: "Aero Chord",
            start: "2016-02-13T23:00",
            end: "2016-02-14T00:00"
        }, {
            id: uuid.v4(),
            dj: "Snails",
            start: "2016-02-14T00:00",
            end: "2016-02-14T01:30"
        }, {
            id: uuid.v4(),
            dj: "Feed Me",
            start: "2016-02-14T01:30",
            end: "2016-02-14T02:45"
        }]
    }]
};
