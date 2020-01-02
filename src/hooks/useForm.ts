import React, { useState } from 'react';

export interface FormStructure {
  [key: string]: string;
}

export const useForm = (
  initialState = {},
  actionFunction: (formData: FormStructure) => void
) => {
  const [formData, setFormData] = useState(initialState);

  const onChange: (event: React.ChangeEvent<HTMLInputElement>) => void = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormData(initialState);
    actionFunction(formData);
  };

  return [onChange, onSubmit, formData];
};
