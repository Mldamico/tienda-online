import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { loadProducts } from '../store/actions/products';
import { Product } from './Product';

const ProductStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  justify-items: center;
  margin: 2rem 10rem;
`;

export const Products: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);
  return (
    <ProductStyle>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ProductStyle>
  );
};
