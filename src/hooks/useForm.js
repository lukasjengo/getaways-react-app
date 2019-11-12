import { useState } from 'react';

export const useForm = (initialState = {}, actionFunction) => {
  const [formData, setFormData] = useState(initialState);

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    setFormData(initialState);
    actionFunction(formData);
  };

  return [onChange, onSubmit, formData];
};
