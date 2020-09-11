import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { firebase } from '../firebase/firebase-config';
import { login } from '../store/actions/auth';
import { ProductsPage } from '../pages/ProductsPage';
import { Navbar } from '../components/Navbar';
interface AppRouterProps {}

export const AppRouter: React.FC<AppRouterProps> = ({}) => {
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
        <Switch>
          <Route exact component={ProductsPage} path='/' />
        </Switch>
      </Router>
    </>
  );
};
