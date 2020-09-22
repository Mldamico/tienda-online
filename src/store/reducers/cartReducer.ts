import { Cart } from '../../pages/Cart';
import { Product } from '../actions/cart';
import { ADD_TO_CART } from '../types';

interface cartInterface {
  cart: Product[];
}

const cartState: cartInterface = {
  cart: [],
};

export const cartReducer = (state = cartState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: state.cart.concat(action.payload),
      };
    default:
      return state;
  }
};
