import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NewDragon from './pages/NewDragon';
import InfoDragon from './pages/InfoDragon';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/dragao/add" exact component={NewDragon} />
        <Route path="/dragao/:id" component={InfoDragon} />
      </Switch>
    </BrowserRouter>
  );
}
