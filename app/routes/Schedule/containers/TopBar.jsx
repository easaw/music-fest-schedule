import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {toggleEditing, addStage } from '../../../actions/index.js';
import TopBar from '../component/TopBar.jsx';



const mapStateToProps = (state) => {
    const isEditing = state.isEditing;
    return {isEditing};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    toggleEditing,
    addStage
  }, dispatch);
};



const TopBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBar);

export default TopBarContainer;
