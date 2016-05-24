import React from 'react';
import Time from './Time.jsx';
import EditableText from './EditableText.jsx';

export default class Act extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            djNameTextSize: 50
        };
    }

    static propTypes = {
        act: React.PropTypes.object.isRequired,
        height: React.PropTypes.number.isRequired,
        top: React.PropTypes.number.isRequired,
        changeActName: React.PropTypes.func.isRequired
    };

    static defaultProps = {
        act: {},
        height: -1,
        top: 900000000000000
    };

    calculateFontSize = () => {
        let djNameTextSize = this.state.djNameTextSize;
        const djName = this.refs.djName;
        const title = this.refs.title;

        if (djName.offsetHeight >= title.offsetHeight || djName.offsetHeight < title.offsetHeight * .80) {
            djNameTextSize = title.offsetWidth / 8.5; // Magic number I just guessed
            this.setState({djNameTextSize: djNameTextSize});
        }

    };

    componentDidMount = () => {
        this.calculateFontSize();
    };

    componentWillReceiveProps = () => {
        this.calculateFontSize();
    };

    handleChange = (event) => {
      let handleChange =  this.props.changeActName;
      let newName = event.target.value;
      handleChange(newName);
    };

    render() {
        const {start, end, dj, height, top, isEditing, } = this.props;
        const {djNameTextSize} = this.state;

        const actStyle = {
            height: `${height}px`,
            top: `${top}px`,
            width: '100%'
        };

        const djNameStyle = {
            fontSize: djNameTextSize
        };
        return <div className="act" style={actStyle} ref="act">
            <div className="time-container" ref="timeContainer">
                <div className="time">
                    <Time time={start}/>
                    -
                    <Time time={end}/>
                </div>
            </div>
            <div className="e-title" ref="title">
                <span className="dj_name" style={djNameStyle} ref="djName">
                  <EditableText text={dj} isEditing={isEditing} handleChange={this.handleChange} />
                </span>
            </div>
        </div>;
    }
}
