import whiteboardsAPI from '../../utils/repository/whiteboardsAPI';

const WB_ADD = 'WB_ADD';

const initialState = {
  id: null,
  name: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case WB_ADD: {
      return Object.assign({}, state, { name: action.data.name, id: action.data.id });
    }
    default: return state;
  }
};


const internalAddWhiteboard = value => ({
  type: WB_ADD,
  data: {
    id: value.id,
    name: value.name,
  },
});

const addWhiteboard = value => dispatch => whiteboardsAPI.add(value)
  .then((id) => {
    const wb = {
      name: value,
      id,
    };
    dispatch(internalAddWhiteboard(wb));
  });

export { addWhiteboard };
export default reducer;
