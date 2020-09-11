import { LOGIN } from '../types';

export const login = (uid, displayName) => ({
  type: typeof LOGIN,
  payload: {
    uid,
    displayName,
  },
});
