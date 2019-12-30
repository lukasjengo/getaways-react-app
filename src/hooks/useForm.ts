import React, { useState } from 'react';

export interface FormStructure {
  [key: string]: any;
}

export const useForm = (
  initialState = {},
  actionFunction: (formData: FormStructure) => void
) => {
  const [formData, setFormData] = useState(initialState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormData(initialState);
    actionFunction(formData);
  };

  return [onChange, onSubmit, formData];
};
