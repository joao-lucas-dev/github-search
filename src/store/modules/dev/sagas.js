import { toast } from 'react-toastify';

import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import { newDevSuccess } from './actions';

export function* newDev({ payload }) {
  const { username, setLoading } = payload;

  try {
    if (!username) {
      toast.warn('Username não preenchido!');
      setLoading(false);
      return;
    }

    const responseUser = yield call(api.get, `/users/${username}`);
    const responseRepos = yield call(api.get, `/users/${username}/repos`);

    yield put(
      newDevSuccess(
        responseUser.data,
        responseRepos.data.sort((a, b) =>
          a.stargazers_count > b.stargazers_count ? -1 : 1
        )
      )
    );

    setLoading(false);
  } catch (err) {
    toast.error('Usuário não encontrado!');
    setLoading(false);
  }
}

export default all([takeLatest('@dev/NEW_DEV_REQUEST', newDev)]);
