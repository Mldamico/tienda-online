import { LOGIN } from '../types';

export const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        uid: action.payload.uid,
        name: action.payload.displayname,
      };
  }
};
