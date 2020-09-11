import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';

interface AuthRouterProps {}

export const AuthRouter: React.FC<AuthRouterProps> = ({}) => {
  return (
    <div>
      <Switch>
        <Route exact path='/auth/login'>
          <Login />
        </Route>
        <Route exact path='/auth/register'>
          <Register />
        </Route>
        <Redirect to='/auth/login' />
      </Switch>
    </div>
  );
};
