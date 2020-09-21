import { db } from '../../firebase/firebase-config';
import { LOAD_PRODUCTS } from '../types';
export const loadProducts = () => {
  return async (dispatch) => {
    const productsSnapshot = await db.collection(`products/`).get();
    const products: any[] = [];

    productsSnapshot.forEach((snap) => {
      products.push({ id: snap.id, ...snap.data() });
    });

    console.log(products);
    dispatch(setProducts(products));
  };
};

export const setProducts = (products) => ({
  type: LOAD_PRODUCTS,
  payload: products,
});
