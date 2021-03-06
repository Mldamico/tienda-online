import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Product } from '../components/Product';
import { buyCart } from '../store/actions/cart';

const CartStyleGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  justify-items: center;
  margin: 2rem 10rem;
`;

const CartStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Cart: React.FC<{}> = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const finishCart = () => {
    dispatch(buyCart());
  };
  return (
    <CartStyle>
      <CartStyleGrid>
        {cart.map((productItem) => (
          <Product product={productItem} isCart />
        ))}
      </CartStyleGrid>
      <div style={{ width: '400px' }}>
        <button type='button' onClick={finishCart} className='button'>
          Buy
        </button>
      </div>
    </CartStyle>
  );
};
