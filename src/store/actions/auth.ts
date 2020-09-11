import { firebase } from '../../firebase/firebase-config';

import { LOGIN } from '../types';

export const login = (uid, displayName) => ({
  type: typeof LOGIN,
  payload: {
    uid,
    displayName,
  },
});

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
