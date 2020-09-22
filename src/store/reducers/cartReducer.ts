import { Cart } from '../../pages/Cart';
import { ADD_TO_CART } from '../types';

export const cartReducer = (state: any = { cart: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: state.cart.push(action.payload),
      };
    default:
      return state;
  }
};
