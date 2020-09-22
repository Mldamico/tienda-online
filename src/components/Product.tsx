import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../store/actions/cart';

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
  isCart?: boolean;
}

export const Product: React.FC<ProductProps> = ({
  id,
  articulo,
  titulo,
  descripcion,
  imagen,
  isCart = false,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const viewDescription = () => {
    history.push(`/${articulo}`);
  };

  const removeProductFromCart = () => {
    console.log(articulo);
    dispatch(removeFromCart(articulo));
  };
  return (
    <ProductStyle>
      <p>{titulo}</p>
      <p>{descripcion}</p>
      <img src={imagen} alt={titulo} />
      {!isCart ? (
        <button type='button' onClick={viewDescription}>
          Ver descripcion
        </button>
      ) : (
        <div>
          <button type='button' onClick={removeProductFromCart}>
            Remove item
          </button>
        </div>
      )}
    </ProductStyle>
  );
};
