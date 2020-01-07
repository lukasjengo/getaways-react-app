import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-axe/extend-expect';
import { render } from 'utils/testUtils';
import { axe } from 'jest-axe';

import ForgotPasswordForm from 'components/authForms/ForgotPasswordForm';

describe('ForgotPasswordForm component', () => {
  test('form is accessible', async () => {
    const { container } = render(<ForgotPasswordForm />);
    const result = await axe(container);
    expect(result).toHaveNoViolations();
  });

  test('form has email input field and submit button', () => {
    const { getByLabelText, getByText } = render(<ForgotPasswordForm />);
    expect(getByLabelText(/email/i)).toHaveAttribute('type', 'email');
    expect(getByText(/reset password/i)).toHaveAttribute('type', 'submit');
  });
});
