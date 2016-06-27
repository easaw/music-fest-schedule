import React from 'react';
import Moment from 'moment';

export default class Edit extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
          dj: props.dj,
          start: Moment(props.start).format('HH:mm'),
          end: Moment(props.end).format('HH:mm'),
          id: props.id,
          stageId: props.stageId,
        }
    }

    static propTypes = {
        dj: React.PropTypes.string.isRequired,
        start: React.PropTypes.string.isRequired,
        end: React.PropTypes.string.isRequired,
        id: React.PropTypes.string.isRequired,
        stageId: React.PropTypes.string.isRequired,
        stages: React.PropTypes.array.isRequired
    };

    updateAct = (event) => {};

    render() {
        const {start, end, dj, stageId} = this.state;
        const {stages} = this.props;

        return <form onSubmit={this.updateAct}>
            <div>
                <label>
                    Start Time:
                    <input type="time" value={start}/>
                </label>
                <label>
                    End Time:
                    <input type="time" value={end}/>
                </label>
                <label>
                    DJ:
                    <input type="text" value={dj}/>
                </label>
                <label>
                    Stage:
                    <select value={stageId}>
                      {
                        stages.map((s) => {
                          return <option key={s.id} value={s.id}>{s.name}</option>;
                        })
                      }
                    </select>
                </label>
            </div>
            <div>
                <button
                  styles={{color: 'white'}}
                  onClick={this.cancelUpdate} >
                    Cancel
                  </button>
                <button
                  styles={{color: 'white'}}
                  monClick={this.updateAct} >
                  Save
                </button>
            </div>

        </form>;
    }
}
