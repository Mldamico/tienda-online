import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../store/actions/products';
export const ProductsPage = ({}) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);
  return <div>Products</div>;
};
