import { LOAD_PRODUCTS } from '../types';

export const productsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};
