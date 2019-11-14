import React from 'react';

import { InputWrapper } from './styles';

const FormInput = ({
  onChange,
  value,
  type,
  name,
  placeholder,
  required,
  minLength,
}) => {
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
        minLength={minLength}
      />
    </InputWrapper>
  );
};

export default FormInput;
