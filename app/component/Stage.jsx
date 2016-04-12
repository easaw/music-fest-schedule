import React from 'react';
import Acts from '../containers/Acts.jsx';

export default class Stage extends React.Component {

    render() {
        const {name} = this.props;
        return (
            <div className="stage">
                <div className="day">
                    {name}
                </div>
                <Acts/>
            </div>
        );
    }
}
