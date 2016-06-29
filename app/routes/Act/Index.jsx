import React  from 'react';
import Edit from './containers/Edit.jsx';

export default class Act extends React.Component {
  render(){
    const {id} = this.props.params;
    return <Edit id={id} />;
  }

  static propTypes = {
    params:  React.PropTypes.object;
  }


}
