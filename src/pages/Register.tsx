import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { startRegisterWithEmailPasswordName } from '../store/actions/auth';
import StyledForm from '../styles/StyledForm';

interface RegisterProps {}

export const Register: React.FC<RegisterProps> = ({}) => {
  const dispatch = useDispatch();
  const [formValues, handleInputChange]: any = useForm({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (password !== password2) {
      return;
    }
    dispatch(startRegisterWithEmailPasswordName(name, email, password));
  };

  const { name, email, password, password2 } = formValues;
  return (
    <StyledForm>
      <h2>Create a new account</h2>
      <form onSubmit={onSubmitHandler}>
        <input
          type='text'
          placeholder='Name'
          name='name'
          autoComplete='off'
          value={name}
          onChange={handleInputChange}
        />

        <input
          type='email'
          placeholder='Email'
          name='email'
          autoComplete='off'
          value={email}
          onChange={handleInputChange}
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          autoComplete='off'
          value={password}
          onChange={handleInputChange}
        />
        <input
          type='password'
          placeholder='Confirm Password'
          name='password2'
          autoComplete='off'
          value={password2}
          onChange={handleInputChange}
        />
        <button>Register</button>
      </form>
    </StyledForm>
  );
};
