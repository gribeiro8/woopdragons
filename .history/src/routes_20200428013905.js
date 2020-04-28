import React from 'react';
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
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/dragao/add" exact component={NewDragon} />
        <Route path="/dragao/:id" component={Dragon} />
      </Switch>
    </BrowserRouter>
  );
}
