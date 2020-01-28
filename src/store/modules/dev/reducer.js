import produce from 'immer';

const INITIAL_STATE = {
  dataUser: [],
  dataRepos: [],
};

export default function search(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@dev/NEW_DEV_SUCCESS':
      return produce(state, draft => {
        draft.dataUser = action.payload.dataUser;
        draft.dataRepos = action.payload.dataRepos;
      });
    default:
      return state;
  }
}
