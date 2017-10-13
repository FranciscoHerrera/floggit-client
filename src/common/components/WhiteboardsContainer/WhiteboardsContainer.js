import { connect } from 'react-redux';
import WhiteboardsWrapper from './WhiteboardsWrapper';

import { addWhiteboard, loadWhiteboards, changeWhiteboard } from '../../../reduxStore/config/whiteboards';

const mapStateToProps = state => ({
  whiteboards: state.whiteboards.whiteboards,
});

const mapDispatchToProps = dispatch => ({
  handleCreateWhiteboard: (whiteboard) => {
    dispatch(addWhiteboard(whiteboard));
  },
  handleLoadWhiteboards: () => {
    dispatch(loadWhiteboards);
  },
  handleChangeWhiteboard: (whiteboard) => {
    dispatch(changeWhiteboard(whiteboard));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(WhiteboardsWrapper);
