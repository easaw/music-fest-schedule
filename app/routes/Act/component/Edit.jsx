import React from 'react';
import Moment from 'moment';
import TimePicker from 'react-toolbox/lib/time_picker';
import Input from 'react-toolbox/lib/input';
import Dropdown from 'react-toolbox/lib/dropdown';

export default class Edit extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            dj: props.dj,
            start: Moment(props.start).toDate(),
            end: Moment(props.end).toDate(),
            id: props.id,
            stageId: props.stageId
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

    handleChange = (name, value) => {
        this.setState({
            ...this.state,
            [name]: value
        });
    }

    render() {
        const {start, end, dj, stageId} = this.state;
        const {stages} = this.props;
        const handleChange = this.handleChange;
        debugger;

        return <form onSubmit={this.updateAct}>
            <TimePicker label="start time" onChange={this.handleChange.bind(this, 'start')} value={start}/>
            <TimePicker label="end time" onChange={this.handleChange.bind(this, 'end')} value={end}/>
            <Input Label="DJ" onChange={this.handleChange.bind(this, 'dj')} value={dj}/>
            Stage:
            <Dropdown auto onChange={this.handleChange.bind(this, 'stageId')} source={stages}></Dropdown>
            <div>
                <button styles={{
                    color: 'white'
                }} onClick={this.cancelUpdate}>
                    Cancel
                </button>
                <button styles={{
                    color: 'white'
                }} monClick={this.updateAct}>
                    Save
                </button>
            </div>
        </form>;
    }
}
