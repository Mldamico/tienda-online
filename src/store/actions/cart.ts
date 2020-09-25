import { db } from '../../firebase/firebase-config';
import { ADD_TO_CART, BUY_CART, REMOVE_FROM_CART } from '../types';

export interface Product {
  id: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  articulo: string;
}

export const addToCart = (product: Product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (articulo: string) => ({
  type: REMOVE_FROM_CART,
  payload: articulo,
});

export const buyCart = () => ({
  type: BUY_CART,
});
