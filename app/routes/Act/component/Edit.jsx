import React from 'react';
import Moment from 'moment';
import TimePicker from 'react-toolbox/lib/time_picker';
import Input from 'react-toolbox/lib/input';
import Dropdown from 'react-toolbox/lib/dropdown';
import {Button} from 'react-toolbox/lib/button';
import Styles from './Edit.scss';

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
        };
    }

    static propTypes = {
        dj: React.PropTypes.string.isRequired,
        start: React.PropTypes.string.isRequired,
        end: React.PropTypes.string.isRequired,
        id: React.PropTypes.string.isRequired,
        stageId: React.PropTypes.string.isRequired,
        stages: React.PropTypes.array.isRequired
    };

    updateAct = (event) => {
      event.preventDefault();
    };

    handleChange = (name, value) => {
        this.setState({
            ...this.state,
            [name]: value
        });
    }

    updateAct =  () => {

    }

    cancelUpdate = () => {

    }

    render() {
        const {start, end, dj, stageId} = this.state;
        const {stages} = this.props;
        const handleChange = this.handleChange;
        debugger;

        return <form onSubmit={this.updateAct} className={Styles.form}>
            <TimePicker label="start time" onChange={this.handleChange.bind(this, 'start')} value={start}/>
            <TimePicker label="end time" onChange={this.handleChange.bind(this, 'end')} value={end}/>
            <Input label="DJ" onChange={this.handleChange.bind(this, 'dj')} value={dj}/>
            <Dropdown label="select a stage" auto onChange={this.handleChange.bind(this, 'stageId')} value={stageId}  source={stages}></Dropdown>
            <div>
                <Button  onClick={this.cancelUpdate}>
                    Cancel
                </Button>
                <Button  onClick={this.updateAct}>
                    Save
                </Button>
            </div>
        </form>;
    }
}
