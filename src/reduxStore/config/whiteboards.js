import whiteboardsAPI from '../../utils/repository/whiteboardsAPI';
import { removeAll } from './notes';

const WB_LOAD = 'WB_LOAD';
const WB_DELETE = 'WB_DELETE';
const WB_SHOW_ADD_FORM = 'WB_SHOW_ADD_FORM';
const WB_HIDE_ADD_FORM = 'WB_HIDE_ADD_FORM';

const initialState = {
  whiteboards: [],
  displayForm: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case WB_LOAD: {
      return Object.assign({}, state, { whiteboards: action.data.values });
    }
    case WB_DELETE: {
      const newArray = state.whiteboards.filter(wb => wb.id !== action.id);
      return Object.assign({}, state, { whiteboards: newArray });
    }
    case WB_SHOW_ADD_FORM: {
      return Object.assign({}, state, { displayForm: true });
    }
    case WB_HIDE_ADD_FORM: {
      return Object.assign({}, state, { displayForm: false });
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

const internalDeleteWhiteboard = id => ({
  type: WB_DELETE,
  id,
});

const showAddForm = () => ({
  type: WB_SHOW_ADD_FORM,
});

const hideAddForm = () => ({
  type: WB_HIDE_ADD_FORM,
});

const loadWhiteboards = () => dispatch => whiteboardsAPI.getAll()
  .then((whiteboards) => {
    dispatch(internalLoadWhiteboards(whiteboards));
  });

const addWhiteboard = value => dispatch => whiteboardsAPI.add(value)
  .then(() => {
    dispatch(loadWhiteboards());
  });

const deleteWhiteboard = id => dispatch => whiteboardsAPI.remove(id)
  .then(() => {
    dispatch(removeAll(id));
    dispatch(internalDeleteWhiteboard(id));
  });

export {
  addWhiteboard,
  loadWhiteboards,
  deleteWhiteboard,
  showAddForm,
  hideAddForm,
};
export default reducer;
