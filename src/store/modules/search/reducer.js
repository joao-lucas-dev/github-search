import produce from 'immer';

const INITIAL_STATE = {
  searching: false,
};

export default function search(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@search/IS_SEARCHING_SUCCESS':
      return produce(state, draft => {
        draft.searching = true;
      });
    default:
      return state;
  }
}
