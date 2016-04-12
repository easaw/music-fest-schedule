import React from 'react';
import Acts from '../containers/Acts.jsx';

export default class Stage extends React.Component {

    render() {
      debugger;
        const {name, id} = this.props;
        return (
            <div className="stage">
                <div className="day">
                    {name}
                </div>
                <Acts stageId={id} />
            </div>
        );
    }
}
