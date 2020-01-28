import React from 'react';
import { Switch } from 'react-router-dom';

import Erro from '../pages/Erro';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Route from './Route';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/" component={Erro} />
    </Switch>
  );
}
