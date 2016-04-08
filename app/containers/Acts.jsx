import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Stages from '../component/Acts.jsx';
import { resize } from '../actions/index.js';
import _ from 'lodash';
import Moment from 'moment';

const mapStateToProps = (state) => {
    return {
      acts: _.chain(state.acts).map().orderBy('start').value()
    };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreator({resize}, dispatch);
};

const ActsContainer = connect(
  mapStateToProps,
  null,
)(Stages)

export default ActsContainer;
