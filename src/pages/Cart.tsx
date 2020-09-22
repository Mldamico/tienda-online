import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const Cart: React.FC<{}> = ({}) => {
  const { cart } = useSelector((state) => state.cart);
  useEffect(() => {
    console.log(cart);
  }, []);
  return <div>PRobando</div>;
};
