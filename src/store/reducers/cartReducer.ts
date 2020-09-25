import { Cart } from '../../pages/Cart';
import { Product } from '../actions/cart';
import { ADD_TO_CART, BUY_CART, REMOVE_FROM_CART } from '../types';

interface cartInterface {
  cart: Product[];
}

const initialState: cartInterface = {
  cart: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (!state.cart.includes(action.payload)) {
        return {
          ...state,
          cart: state.cart.concat(action.payload),
        };
      }

    case REMOVE_FROM_CART:
      const newCart = state.cart.filter(
        (product) => product.articulo !== action.payload
      );
      return {
        ...state,
        cart: newCart,
      };
    case BUY_CART:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};
