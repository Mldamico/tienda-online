import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm';
const StyledRegister = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 95vh;
`;
interface RegisterProps {}
interface UserInterface {}

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
  };

  const { name, email, password, password2 } = formValues;
  return (
    <StyledRegister>
      <h2>Registrar</h2>
      <form onSubmit={onSubmitHandler}>
        <input
          type='text'
          placeholder='Name'
          name='name'
          autoComplete='off'
          value={name}
          onChange={handleInputChange}
        />

        <input />
        <input />
      </form>
    </StyledRegister>
  );
};
