import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Dashboard from './pages/NewDragon';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/dragao/add" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}
