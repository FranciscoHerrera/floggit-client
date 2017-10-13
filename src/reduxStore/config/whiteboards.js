import whiteboardsAPI from '../../utils/repository/whiteboardsAPI';

const WB_CHANGE = 'WB_CHANGE';
const WB_LOAD = 'WB_LOAD';

const initialState = {
  whiteboards: [],
  id: null,
  name: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case WB_CHANGE: {
      return Object.assign({}, state, { name: action.data.name, id: action.data.id });
    }
    case WB_LOAD: {
      return Object.assign({}, state, { whiteboards: action.data.values });
    }
    default: return state;
  }
};

const internalLoadWhiteboards = whiteboards => ({
  type: WB_LOAD,
  data: {
    values: whiteboards,
  },
});

const changeWhiteboard = whiteboard => ({
  type: WB_CHANGE,
  data: {
    id: whiteboard.id,
    name: whiteboard.name,
  },
});

const addWhiteboard = value => dispatch => whiteboardsAPI.add(value)
  .then((id) => {
    const wb = {
      name: value,
      id,
    };
    dispatch(changeWhiteboard(wb));
  });

const loadWhiteboards = () => dispatch => whiteboardsAPI.getAll()
  .then((whiteboards) => {
    dispatch(internalLoadWhiteboards(whiteboards));
  });

export { changeWhiteboard, addWhiteboard, loadWhiteboards };
export default reducer;
