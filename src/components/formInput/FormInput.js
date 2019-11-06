import React from 'react';

import { InputWrapper } from './styles';

const FormInput = ({ onChange, value, type, name, placeholder, required }) => {
  return (
    <InputWrapper>
      <label htmlFor={name}>{name}</label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
      />
    </InputWrapper>
  );
};

export default FormInput;
