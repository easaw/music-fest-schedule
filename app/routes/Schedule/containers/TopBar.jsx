import { connect } from 'react-redux';
import {toggleEditing} from '../../../actions/index.js';
import TopBar from '../component/TopBar.jsx';



const mapStateToProps = (state, ownProps) => {
    const isEditing = state.isEditing;
    return {isEditing};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        toggleEditing: (newName) => {
          console.log(toggleEditing);
            dispatch(toggleEditing());
        }
    };
};



const TopBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBar);

export default TopBarContainer;
