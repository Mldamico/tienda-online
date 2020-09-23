import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Product } from '../components/Product';
import styled from 'styled-components';

const CartStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Cart: React.FC<{}> = ({}) => {
  const { cart } = useSelector((state) => state.cart);
  useEffect(() => {
    console.log(cart);
  }, []);
  return (
    <CartStyle>
      {cart.map((item) => (
        <Product
          key={item.id}
          id={item.id}
          titulo={item.titulo}
          descripcion={item.descripcion}
          imagen={item.imagen}
          articulo={item.articulo}
          isCart
        />
      ))}
    </CartStyle>
  );
};
