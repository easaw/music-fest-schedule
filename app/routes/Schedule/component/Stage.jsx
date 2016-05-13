import React from 'react';
import Acts from '../containers/Acts.jsx';

export default class Stage extends React.Component {

    static propTypes = {
        name: React.PropTypes.string,
        id: React.PropTypes.string,
        isEditing: React.PropTypes.bool
    };

    handleChange = (event) => {
      let handleChange =  this.props.changeStageName;
      let newName = event.target.value;
      handleChange(newName);

    };
    render() {
        const {name, id, isEditing} = this.props;
        return (
            <div className="stage">
                <div className="day">
                    {(() => {
                        if (isEditing) {
                          return <input
                            type="text"
                            defaultValue={name}
                            onChange={this.handleChange} />;
                        } else {
                          return  <span>{name}</span>;
                        }
                    })()}
                </div>
                <Acts stageId={id}/>
            </div>
        );
    }
}
