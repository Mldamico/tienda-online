import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
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
  id: string;
  articulo: string;
  titulo: string;
  imagen: string;
  descripcion: string;
}

export const Product: React.FC<ProductProps> = ({
  id,
  articulo,
  titulo,
  descripcion,
  imagen,
}) => {
  let history = useHistory();
  const viewDescription = () => {
    history.push(`/${articulo}`);
  };
  return (
    <ProductStyle>
      <p>{titulo}</p>
      <p>{descripcion}</p>
      <img src={imagen} alt={titulo} />
      <button type='button' onClick={viewDescription}>
        Ver descripcion
      </button>
    </ProductStyle>
  );
};
