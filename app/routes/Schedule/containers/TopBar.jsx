import { connect } from 'react-redux';
import {toggleEditing, addStage } from '../../../actions/index.js';
import TopBar from '../component/TopBar.jsx';



const mapStateToProps = (state, ownProps) => {
    const isEditing = state.isEditing;
    return {isEditing};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        toggleEditing: () => {
            dispatch(toggleEditing());
        },
        addStage: () => {
          dispatch(addStage());
        }
    };
};



const TopBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBar);

export default TopBarContainer;
