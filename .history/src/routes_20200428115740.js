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
        <PrivateRoute path="/dragao/add"  component={NewDragon} />
        <PrivateRoute path="/dragao/:id" component={Dragon} />
        <PrivateRoute path="/dragao/edit/:id" component={Dragon} />
      </Switch>
    </BrowserRouter>
  );
}
