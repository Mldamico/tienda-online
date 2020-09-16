import { LOGIN, LOGOUT } from '../types';

export const authReducer = (state = { uid: '', name: '' }, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
      };
    case LOGOUT:
      return {};
    default:
      return state;
  }
};
