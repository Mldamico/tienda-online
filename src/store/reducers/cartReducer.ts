import { Product } from '../actions/cart';
import { ADD_TO_CART, BUY_CART, REMOVE_FROM_CART } from '../types';

interface cartInterface {
  cart: Product[];
  cartTotal: number;
}

const initialState: cartInterface = {
  cart: [],
  cartTotal: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (!state.cart.includes(action.payload)) {
        return {
          ...state,
          cart: state.cart.concat(action.payload),
          cartTotal: state.cartTotal + action.payload.precio,
        };
      }
      break;
    case REMOVE_FROM_CART:
      const newCart = state.cart.filter(
        (product) => product.articulo !== action.payload
      );
      return {
        ...state,
        cart: newCart,
        cartTotal: state.cartTotal - action.payload.precio,
      };
    case BUY_CART:
      return {
        ...state,
        cart: [],
        cartTotal: 0,
      };
    default:
      return state;
  }
};
