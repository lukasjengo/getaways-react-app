import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export interface FormStructure {
  [key: string]: string;
}

export type UseFormType = (
  initialState: FormStructure,
  actionFunction: (formData: FormStructure) => void
) => [
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  (e: React.FormEvent<HTMLFormElement>) => void,
  FormStructure
];

export const useForm: UseFormType = (initialState = {}, actionFunction) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState);

  const handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData(initialState);
    dispatch(actionFunction(formData));
  };

  return [handleChange, handleSubmit, formData];
};
