import React from 'react';
import Acts from '../containers/Acts.jsx';

export default class Stage extends React.Component {

    static propTypes = {
        name: React.propTypes.string,
        id: React.propTypes.object
    };

    render() {
        const {name, id} = this.props;
        return (
            <div className="stage">
                <div className="day">
                    {name}
                </div>
                <Acts stageId={id}/>
            </div>
        );
    }
}
