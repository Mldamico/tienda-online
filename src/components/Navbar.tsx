import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { startLogout } from '../store/actions/auth';
import { useDispatch, useSelector } from 'react-redux';
const StyledNavbar = styled.div`
  display: flex;
  width: 100%;
  background-color: tomato;
  height: 5vh;
  align-items: center;
  color: #fff;
  justify-content: space-between;

  h1 {
    padding-left: 2rem;
  }
  ul {
    display: flex;
    list-style: none;
    font-size: 1.1rem;
    li {
      padding: 0 1rem;
    }

    li > a {
      color: #fff;
      text-decoration: none;
      transition: all 0.5s;
    }

    li > a:hover {
      opacity: 0.8;
    }
  }
`;

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(startLogout());
  };
  return (
    <StyledNavbar>
      <div>
        <h1>Tienda-Online</h1>
      </div>
      <div>
        <ul>
          <li>
            <Link to='/'>Products</Link>
          </li>
          <li>
            <Link to='/cart'>Cart</Link>
          </li>
          {name ? (
            <>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
              <li>Bienvenido {name} </li>
            </>
          ) : (
            <>
              <li>
                <Link to='/register'>Register</Link>
              </li>
              <li>
                <Link to='/login'>Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </StyledNavbar>
  );
};
