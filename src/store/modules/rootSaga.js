import { all } from 'redux-saga/effects';

import search from './search/sagas';

export default function* rootSaga() {
  yield all(search);
}
