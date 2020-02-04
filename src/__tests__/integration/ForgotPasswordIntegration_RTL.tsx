import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-axe/extend-expect';
import { render } from 'testUtils/testUtils';
import { axe } from 'jest-axe';
import { wait } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

import ForgotPasswordForm from 'components/authForms/ForgotPasswordForm';
import { FORGOT_PASSWORD_REQUEST } from 'redux/auth/authTypes';

const forgotPassword: jest.Mock = require('redux/auth/authActions')
  .forgotPassword;

jest.mock('redux/auth/authActions', () => ({
  forgotPassword: jest.fn(),
}));

describe('ForgotPasswordForm component', () => {
  let wrapper: ReturnType<typeof render>;

  beforeEach(() => {
    wrapper = render(<ForgotPasswordForm />);
  });

  describe('When renders first time form', () => {
    test('is accessible', async () => {
      const { container } = wrapper;
      const result = await axe(container);
      expect(result).toHaveNoViolations();
    });

    test('has email input field and submit button', () => {
      const { getByLabelText, getByText } = wrapper;
      expect(getByLabelText(/email/i)).toHaveAttribute('type', 'email');
      expect(getByText(/reset password/i)).toHaveAttribute('type', 'submit');
    });

    test('input can be typed by user', async () => {
      const { getByLabelText } = wrapper;
      await wait(() =>
        userEvent.type(getByLabelText(/email/i), 'lukasjanonis@gmail.com')
      );
      expect(getByLabelText(/email/i)).toHaveAttribute(
        'value',
        'lukasjanonis@gmail.com'
      );
    });

    test('has button to login form', () => {
      const { getByText } = wrapper;
      expect(getByText(/login here/i)).toHaveAttribute('type', 'button');
    });

    test('has button to register form', () => {
      const { getByText } = wrapper;
      expect(getByText(/register here/i)).toHaveAttribute('type', 'button');
    });
  });

  describe('When user clicks form submit', () => {
    test('button spinner is displayed', async () => {
      const { getByLabelText, getByTestId, store } = wrapper;
      await wait(() =>
        userEvent.type(getByLabelText(/email/i), 'lukasjanonis@gmail.com')
      );

      store.dispatch({ type: FORGOT_PASSWORD_REQUEST });

      expect(getByTestId('loading-spinner')).toBeInTheDocument();
    });

    test('thunk action is called correctly', async () => {
      const { getByLabelText, getByText } = wrapper;
      await wait(() =>
        userEvent.type(getByLabelText(/email/i), 'lukasjanonis@gmail.com')
      );
      const submitBtn = getByText(/reset password/i);

      await wait(() => userEvent.click(submitBtn));

      expect(forgotPassword).toHaveBeenCalledTimes(1);
      expect(forgotPassword).toHaveBeenCalledWith({
        email: 'lukasjanonis@gmail.com',
      });
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

// TRY TESTING FORM WITHOUT FORMIK
// TRY TESTING BY CHANGING STATE MANUALLY
