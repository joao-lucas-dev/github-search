import { combineReducers } from 'redux';

import dev from './dev/reducer';
import search from './search/reducer';

const reducers = combineReducers({
  search,
  dev,
});

export default reducers;
