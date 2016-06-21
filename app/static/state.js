import uuid from 'node-uuid';
import {
    Schema,
    arrayOf,
    normalize
} from 'normalizr';


export default (() => {

    const act = new Schema('acts', {
        idAttribue: 'id'
    });

    const stage = new Schema('stages', {
        idAttribue: 'id'
    });

    stage.define({
        acts: arrayOf(act)
    });

    const stage1Id = uuid.v4();
    const stage2Id = uuid.v4();
    const result = {
        stages: [{
            id: stage1Id,
            name: 'Energy',
            date: '2016-02-13',
            acts: [{
                id: uuid.v4(),
                stageId: stage1Id,
                dj: 'Michael Constable B2B Theo Hansen',
                start: '2016-02-13T20:00:00-07:00',
                end: '2016-02-13T21:30:00-07:00'
            }, {
                id: uuid.v4(),
                stageId: stage1Id,
                dj: 'Wicked Science',
                start: '2016-02-13T21:30:00-07:00',
                end: '2016-02-13T22:45:00-07:00'
            }, {
                id: uuid.v4(),
                stageId: stage1Id,
                dj: 'ANEVO',
                start: '2016-02-13T22:45:00-07:00',
                end: '2016-02-14T00:00:00-07:00'
            }, {
                id: uuid.v4(),
                stageId: stage1Id,
                dj: 'KSHMR',
                start: '2016-02-14T00:00:00-07:00',
                end: '2016-02-14T01:15:00-07:00'
            }, {
                id: uuid.v4(),
                stageId: stage1Id,
                dj: 'Dimitri Vegas & Like Mike',
                start: '2016-02-14T01:15:00-07:00',
                end: '2016-02-14T02:30:00-07:00'
            }]
        }, {
            id: stage2Id,
            name: 'Bass',
            date: '2016-02-13',
            acts: [{
                id: uuid.v4(),
                stageId: stage2Id,
                dj: 'Pill Dickle',
                start: '2016-02-13T20:00:00-07:00',
                end: '2016-02-13T21:00:00-07:00'
            }, {
                id: uuid.v4(),
                stageId: stage2Id,
                dj: 'Random Hero B2B Jabonesio',
                start: '2016-02-13T21:00:00-07:00',
                end: '2016-02-13T22:00:00-07:00'
            }, {
                id: uuid.v4(),
                stageId: stage2Id,
                dj: 'Flatland funk',
                start: '2016-02-13T22:00:00-07:00',
                end: '2016-02-13T23:00:00-07:00'
            }, {
                id: uuid.v4(),
                stageId: stage2Id,
                dj: 'Aero Chord',
                start: '2016-02-13T23:00:00-07:00',
                end: '2016-02-14T00:00:00-07:00'
            }, {
                id: uuid.v4(),
                stageId: stage2Id,
                dj: 'Snails',
                start: '2016-02-14T00:00:00-07:00',
                end: '2016-02-14T01:30:00-07:00'
            }, {
                id: uuid.v4(),
                stageId: stage2Id,
                dj: 'Feed Me',
                start: '2016-02-14T01:30:00-07:00',
                end: '2016-02-14T02:45:00-07:00'
            }]
        }]
    };

    let results = normalize(result, {
        stages: arrayOf(stage)
    });
    let state = Object.assign({}, {
        stages: results.entities.stages,
        acts: results.entities.acts,
        time: Date.now(),
        isEditing: false
    });
    return state;
})();
