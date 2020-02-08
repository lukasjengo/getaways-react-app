import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-axe/extend-expect';
import { render } from 'testUtils/testUtils';
import { wait } from '@testing-library/dom';
import { renderHook } from '@testing-library/react-hooks';
import userEvent from '@testing-library/user-event';

import ForgotPasswordForm from 'components/authForms/ForgotPasswordForm';
import { useForm } from 'hooks/useForm';

const forgotPassword: jest.Mock = require('redux/auth/authActions')
  .forgotPassword;

jest.mock('redux/auth/authActions', () => ({
  forgotPassword: jest.fn()
}));

describe('ForgotPasswordForm component', () => {
  let wrapper: ReturnType<typeof render>;

  beforeEach(() => {
    wrapper = render(<ForgotPasswordForm />);
  });

  describe('When user clicks form submit', () => {
    test('thunk action is called correctly', async () => {
      const { getByLabelText, getByText, debug } = wrapper;
      // await wait(() =>
      //   userEvent.type(getByLabelText(/email/i), 'lukasjanonis@gmail.com')
      // );
      // const submitBtn = getByText(/reset password/i);

      // debug();
      // await wait(() => userEvent.click(submitBtn));
      // // const {result} = renderHook(useForm, )
      // expect(forgotPassword).toHaveBeenCalledTimes(1);
      // expect(forgotPassword).toHaveBeenCalledWith({
      //   email: 'lukasjanonis@gmail.com'
      // });
    });

    // test('thunk error action is called', () => {
    //   forgotPassword.mockRejectedValue('Fail!');
    //   expect(forgotPassword).toHaveBeenCalledTimes(1);
    //   expect(forgotPassword).toHaveBeenCalledWith({
    //     email: 'Fail!',
    //   });
    // });
  });
});
