import { connect } from 'react-redux';
import WhiteboardsWrapper from './WhiteboardsWrapper';

import { addWhiteboard } from '../../../reduxStore/config/whiteboards';

const mapStateToProps = state => ({
  whiteboardId: state.whiteboardId,
  whiteboardName: state.whiteboardName,
});

const mapDispatchToProps = dispatch => ({
  handleCreateWhiteboard: (value) => {
    dispatch(addWhiteboard(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(WhiteboardsWrapper);
