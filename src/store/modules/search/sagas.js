import { toast } from 'react-toastify';

import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import history from '../../../services/history';
import { isSearchingSuccess } from './actions';

export function* searching({ payload }) {
  const { username, setLoading } = payload;

  try {
    if (!username) {
      toast.warn('Username não preenchido!');
      setLoading(false);
      return;
    }

    const responseUser = yield call(api.get, `/users/${username}`);
    const responseRepos = yield call(api.get, `/users/${username}/repos`);

    const dataUser = responseUser.data;
    const dataRepos = responseRepos.data.sort((a, b) =>
      a.stargazers_count > b.stargazers_count ? -1 : 1
    );

    yield put(isSearchingSuccess(dataUser, dataRepos));

    history.push('/profile');
  } catch (err) {
    toast.error('Usuário não encontrado!');
    setLoading(false);
  }
}

export default all([takeLatest('@search/IS_SEARCHING_REQUEST', searching)]);
