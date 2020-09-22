import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { firebase } from '../firebase/firebase-config';
import { login } from '../store/actions/auth';
import { ProductsPage } from '../pages/ProductsPage';
import { Navbar } from '../components/Navbar';
import { Register } from '../pages/Register';
import styled from 'styled-components';
import { Login } from '../pages/Login';
import { PublicRouter } from './PublicRouter';
import { PrivateRouter } from './PrivateRouter';
import { Cart } from '../pages/Cart';
import { ProductDescription } from '../pages/ProductDescription';

const StyledRouterContainer = styled.div`
  height: 100%;
`;

export const AppRouter = ({}) => {
  const dispatch = useDispatch();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, [dispatch, setIsLoggedIn]);
  return (
    <>
      <Router>
        <Navbar />
        <StyledRouterContainer>
          <Switch>
            <Route exact component={ProductsPage} path='/' />
            <Route exact component={ProductDescription} path='/:articulo' />
            <PrivateRouter
              isAuthenticated={isLoggedIn}
              component={Cart}
              path='/cart'
            />
            <PublicRouter
              isAuthenticated={isLoggedIn}
              component={Register}
              path='/register'
            />
            <PublicRouter
              isAuthenticated={isLoggedIn}
              component={Login}
              path='/login'
            />
          </Switch>
        </StyledRouterContainer>
      </Router>
    </>
  );
};
