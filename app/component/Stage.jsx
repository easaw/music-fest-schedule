import React from 'react';
import ReactDom from 'react-dom';
import Acts from '../containers/Acts.jsx';
import Moment from 'moment';

export default class Stage extends React.Component {

  render (){
    const {name} = this.props;
    return (
      <div className="stage">
          <div className="day" >
            {name}
          </div>
        <Acts />
      </div>
    );
}
}
