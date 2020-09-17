import React from 'react';
import { useForm } from '../hooks/useForm';
import { startLogin } from '../store/actions/auth';
import StyledForm from '../styles/StyledForm';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
interface LoginProps {}

export const Login: React.FC<LoginProps> = ({}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [formValues, handleInputChange]: any = useForm({
    email: '',
    password: '',
  });
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(startLogin(email, password));
    history.push('/');
  };

  const { name, email, password } = formValues;
  return (
    <StyledForm>
      <h2>Login</h2>
      <form onSubmit={onSubmitHandler}>
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

        <button>Login</button>
      </form>
    </StyledForm>
  );
};
