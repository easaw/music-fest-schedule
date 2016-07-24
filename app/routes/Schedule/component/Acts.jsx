import React from 'react';
import ReactDom from 'react-dom';
import Act from '../containers/Act.jsx';
import Styles from './Acts.scss';

export default class Acts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            height: 0
        };
    }

    static propTypes = {
        acts: React.PropTypes.array,
        isEditing: React.PropTypes.bool,
        stageStart: React.PropTypes.string,
        stageEnd: React.PropTypes.string,
        stageLength: React.PropTypes.number
    };

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    }

    handleResize = () => {
        const thisNode = ReactDom.findDOMNode(this);
        const thisHeight = thisNode.offsetHeight;
        this.setState({height: thisHeight});
    };

    render() {
        const { acts, stageStart, stageEnd, stageLength} = this.props;
        const height = this.state.height;
        return (
            <div className={Styles.acts}>
                {acts.map((a) => {
                    return (<Act key={a.id}  height={height} stageStart={stageStart} stageEnd={stageEnd} stageLength={stageLength}  {...a} />);
                }, this)}
            </div>
        );
    }
}
