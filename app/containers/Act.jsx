import { connect } from 'react-redux';
import Stages from '../component/Act.jsx';
import _ from 'lodash';
import Moment from 'moment';

const mapStateToProps = (state, ownProps) => {

    // top
    // length
    
    return {
      act: ownProps.act,
    };
};

const ActContainer = connect(
  mapStateToProps,
  null,
)(Stages)

export default ActContainer;
