import produce from 'immer';

const INITIAL_STATE = {
  dataUser: [],
  dataRepos: [],
};

export default function search(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@search/IS_SEARCHING_SUCCESS': {
        draft.dataUser = action.payload.dataUser;
        draft.dataRepos = action.payload.dataRepos;
        break;
      }
      case '@dev/NEW_DEV_SUCCESS': {
        draft.dataUser = action.payload.dataUser;
        draft.dataRepos = action.payload.dataRepos;
        break;
      }
      default:
        break;
    }
  });
}
