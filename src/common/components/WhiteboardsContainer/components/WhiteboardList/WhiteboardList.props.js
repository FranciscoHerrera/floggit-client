import PropTypes from 'prop-types';

const propTypes = {
  whiteboards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })),
  handleJoinWhiteboard: PropTypes.func,
  handleDeleteWhiteboard: PropTypes.func,
};

export default propTypes;
