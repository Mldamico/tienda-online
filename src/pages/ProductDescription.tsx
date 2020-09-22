import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { db } from '../firebase/firebase-config';

const ProductDescriptionStyle = styled.div`
  margin: 2rem auto;
  width: 100%;
  display: flex;
  justify-content: center;

  .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 5rem;
  }
`;

export const ProductDescription: React.FC<{}> = ({}) => {
  const [product, setProduct]: any = useState({});
  let { articulo } = useParams();

  const getProduct = async () => {
    const productSnapshot = await db
      .collection(`products/`)
      .where('articulo', '==', articulo)
      .get();
    setProduct(productSnapshot.docs[0].data());
  };

  const addToCart = () => {};

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <ProductDescriptionStyle>
      <div className='description'>
        <p>
          {product.titulo} - {product.articulo}
        </p>
        <p>{product.descripcion}</p>
        <button type='button' onClick={addToCart}>
          Add to Cart
        </button>
      </div>
      <div>
        <img src={product.imagen} alt={product.titulo} />
      </div>
    </ProductDescriptionStyle>
  );
};
