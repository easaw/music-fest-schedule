import React from 'react';
import ReactDom from 'react-dom';
import Moment from 'moment';
import Act from '../containers/Act.jsx';

export default class Acts extends React.Component {

    constructor(props) {
        super(props);
    }

    minutesToPixels = (min) => {
        return min * (this.state.height / this.props.totalMinutes);
    };

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    }

    handleResize = () => {
        debugger;
        const thisNode = ReactDom.findDOMNode(this);
        const thisHeight = thisNode.offsetHeight;
        this.setState({height: thisHeight});
    };

    render() {
      const acts = this.props.acts;
        return (
            <div className="acts">
                {acts.map((a) => {
                    return (<Act key={a.id} act={a}  />);
                },this)}
            </div>
        );
    }
}
