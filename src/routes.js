import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Profile from './pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/profile" component={Profile} />
    </Switch>
  );
}
