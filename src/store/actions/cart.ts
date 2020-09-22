import { db } from '../../firebase/firebase-config';
import { ADD_TO_CART } from '../types';

export const addToCart = (product: {}) => ({
  type: ADD_TO_CART,
  payload: product,
});
