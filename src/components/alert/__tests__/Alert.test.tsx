import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { render } from 'testUtils/testUtils';

import Alert from '../Alert';

describe('Alert component', () => {
  test('displays correct alert message', () => {
    const alert = { msg: 'App broke', alertType: 'danger', id: '1234' };
    const wrapper = render(<Alert />, {
      initialState: {
        alerts: [alert]
      }
    });
    const { getByText } = wrapper;
    expect(getByText(alert.msg)).toHaveTextContent(alert.msg);
  });

  test('displays correct amount of alerts', () => {
    const alerts = [
      { msg: 'App broke', alertType: 'danger', id: '1' },
      { msg: 'App broke more', alertType: 'danger', id: '2' }
    ];
    const wrapper = render(<Alert />, {
      initialState: {
        alerts
      }
    });
    const { getAllByTestId } = wrapper;
    expect(getAllByTestId(/alert/).length).toBe(2);
  });
});
