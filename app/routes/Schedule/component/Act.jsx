import React from 'react';
import EditableText from './EditableText.jsx';
import Time from './Time.jsx';
import {Link} from 'react-router';
import Styles from './Act.scss';

export default class Act extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            djNameTextSize: 50
        };
    }

    static propTypes = {
      id: React.PropTypes.string.isRequired,
        act: React.PropTypes.object.isRequired,
        height: React.PropTypes.number.isRequired,
        top: React.PropTypes.number.isRequired,
        renameAct: React.PropTypes.func.isRequired,
        start: React.PropTypes.number.isRequired,
                end: React.PropTypes.number.isRequired,
        dj: React.PropTypes.string.isRequired,
        isEditing: React.PropTypes.bool.isRequired,
        stageStart: React.PropTypes.number.isRequired,
        stageEnd: React.PropTypes.number.isRequired,
        stageLength: React.PropTypes.number.isRequired

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
        if (djName && title) {
            if (djName.offsetHeight >= title.offsetHeight || djName.offsetHeight < title.offsetHeight * .80) {
                djNameTextSize = title.offsetWidth / 8.5; // Magic number I just guessed
                this.setState({djNameTextSize: djNameTextSize});
            }
        }

    };

    componentDidMount = () => {
        this.calculateFontSize();
    };

    componentWillReceiveProps = () => {
        this.calculateFontSize();
    };

    handleChange = (event) => {
        const {id, renameAct} = this.props;
        let newName = event.target.value;
        renameAct(id, newName);
    };

    render() {
        const {
            id,
            start,
            end,
            dj,
            height,
            top,
            isEditing
        } = this.props;
        const {djNameTextSize} = this.state;
        const path = `/act/${id}`;

        return <div className={Styles.act} style={{
            height: `${height}px`,
            top: `${top}px`,
            width: '100%'
        }} ref="act">
            <div className={Styles.timeContainer} ref="timeContainer">
                <div className={Styles.time}>
                    <Time time={start}/>
                    -
                    <Time time={end}/>
                </div>
                <button className={Styles.deleteAct} onClick={this.handleActDelete}>
                    [x]
                </button>
                <Link to={path}>Edit</Link>
            </div>
            <div className={Styles.eTitle} ref="title">
                <span className={Styles.dj_name} style={{
                    fontSize: djNameTextSize
                }} ref="djName">
                    <EditableText text={dj} isEditing={isEditing} handleChange={this.handleChange}/>
                </span>
            </div>
        </div>;
    }
}
