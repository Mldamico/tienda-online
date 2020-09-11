import { useState } from 'react';

interface UserInterface {
  name: string;
  email: string;
  password: string;
  password2: string;
}

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const reset = (newFormState = initialState): void => {
    setValues(newFormState);
  };

  const handleInputChange = ({ target }): void => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return [values, handleInputChange, reset];
};
