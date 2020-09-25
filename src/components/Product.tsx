import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../store/actions/cart';

const ProductStyle = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  img {
    width: 400px;
    height: 400px;
    overflow: hidden;
  }
  button {
    padding: 1rem;
    width: 100%;
    border-radius: ${(props) => (!props.isCart ? '0 0 10px 10px' : '10px')};
    border: 0;
    color: #fff;
    background-color: var(--red);
    font-size: 24px;
  }
`;

interface ProductProps {
  product: any;
  isCart?: boolean;
}

export const Product: React.FC<ProductProps> = ({
  product: { articulo, titulo, descripcion, imagen },
  isCart = false,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const viewDescription = () => {
    history.push(`/product/${articulo}`);
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
        <button type='button' onClick={removeProductFromCart}>
          Remove item
        </button>
      )}
    </ProductStyle>
  );
};
