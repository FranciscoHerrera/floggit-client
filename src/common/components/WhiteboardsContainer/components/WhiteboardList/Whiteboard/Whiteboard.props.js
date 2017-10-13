import PropTypes from 'prop-types';

const propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleJoinWhiteboard: PropTypes.func.isRequired,
  handleDeleteWhiteboard: PropTypes.func.isRequired,
};

export default propTypes;
