export function isSearchingRequest(username, setLoading) {
  return {
    type: '@search/IS_SEARCHING_REQUEST',
    payload: { username, setLoading },
  };
}

export function isSearchingSuccess(dataUser, dataRepos) {
  return {
    type: '@search/IS_SEARCHING_SUCCESS',
    payload: { dataUser, dataRepos },
  };
}
