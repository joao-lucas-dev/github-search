export function newDevRequest(username, setLoading) {
  return {
    type: '@dev/NEW_DEV_REQUEST',
    payload: { username, setLoading },
  };
}

export function newDevSuccess(dataUser, dataRepos) {
  return {
    type: '@dev/NEW_DEV_SUCCESS',
    payload: { dataUser, dataRepos },
  };
}
