import React from 'react';
import { isAuthenticated } from "./auth";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NewDragon from './pages/NewDragon';
import Dragon from './pages/Dragon';

export default function Routes() {

  const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/dragon/add"  component={NewDragon} />
        <PrivateRoute path="/dragon/:id" exact component={Dragon} />
        <PrivateRoute path="/dragon/edit/:id" component={NewDragon} />
      </Switch>
    </BrowserRouter>
  );
}
