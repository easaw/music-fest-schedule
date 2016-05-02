import React from 'react';
import ReactDom from 'react-dom';
import Act from '../containers/Act.jsx';

export default class Acts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            height: 0
        };
    }

    static propTypes = {
        acts: React.PropTypes.array
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
        const acts = this.props.acts;
        const height = this.state.height;
        return (
            <div className="acts">
                {acts.map((a) => {
                    return (<Act key={a.id} act={a} height={height}/>);
                }, this)}
            </div>
        );
    }
}
