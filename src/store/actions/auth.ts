import { firebase } from '../../firebase/firebase-config';

import { LOGIN, LOGOUT } from '../types';

export const login = (uid, displayName) => ({
  type: LOGIN,

  payload: {
    uid,
    displayName,
  },
});

export const startLogin = (email, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        dispatch(login(user?.uid, user?.displayName));
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export const startRegisterWithEmailPasswordName = (name, email, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user?.updateProfile({ displayName: name });
        dispatch(login(user?.uid, user?.displayName));
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export const logout = () => ({
  type: LOGOUT,
});

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(logout());
  };
};
