import React from 'react';
import styled from 'styled-components';

const ProductStyle = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  border-radius: 10px;

  img {
    width: 400px;
    height: 400px;
    overflow: hidden;
  }
`;

interface ProductProps {
  titulo: string;
  imagen: string;
  descripcion: string;
}

export const Product: React.FC<ProductProps> = ({
  titulo,
  descripcion,
  imagen,
}) => {
  return (
    <ProductStyle>
      <p>{titulo}</p>
      <p>{descripcion}</p>
      <img src={imagen} alt={titulo} />
      <button type='button'>Ver descripcion</button>
    </ProductStyle>
  );
};
