import { all } from 'redux-saga/effects';

import dev from './dev/sagas';
import search from './search/sagas';

export default function* rootSaga() {
  yield all([search, dev]);
}
