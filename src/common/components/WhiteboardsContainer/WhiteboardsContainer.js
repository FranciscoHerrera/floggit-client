import { connect } from 'react-redux';
import WhiteboardsWrapper from './WhiteboardsWrapper';

import { addWhiteboard, loadWhiteboards, deleteWhiteboard, showAddForm, hideAddForm } from '../../../reduxStore/config/whiteboards';

const mapStateToProps = state => ({
  whiteboards: state.whiteboards.whiteboards,
  displayForm: state.whiteboards.displayForm,
});

const mapDispatchToProps = dispatch => ({
  handleCreateWhiteboard: (whiteboard) => {
    dispatch(addWhiteboard(whiteboard));
    dispatch(hideAddForm());
  },
  handleLoadWhiteboards: () => {
    dispatch(loadWhiteboards);
  },
  handleDeleteWhiteboard: (id) => {
    dispatch(deleteWhiteboard(id));
  },
  handleAddBtnClicked: () => {
    dispatch(showAddForm());
  },
  handleLeaveForm: () => {
    dispatch(hideAddForm());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(WhiteboardsWrapper);
