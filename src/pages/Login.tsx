import React, { useEffect } from 'react';
import { useForm } from '../hooks/useForm';
import { startLogin } from '../store/actions/auth';
import StyledForm from '../styles/StyledForm';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
interface LoginProps {}

export const Login: React.FC<LoginProps> = ({}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { name } = useSelector((state) => state.auth);
  const [formValues, handleInputChange]: any = useForm({
    email: '',
    password: '',
  });
  useEffect(() => {
    if (name) {
      history.push('/');
    }
    console.log(name);
  }, [dispatch]);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(startLogin(email, password));
    history.push('/');
  };

  const { email, password } = formValues;
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
