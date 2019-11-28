import React from 'react';
import { useSelector } from 'react-redux';

import { AlertWrapper, StyledAlert } from './styles';

const Alert = () => {
  const alerts = useSelector(state => state.alerts);
  return (
    <AlertWrapper>
      {alerts.map(alert => (
        <StyledAlert key={alert.id} type={alert.alertType}>
          {alert.msg}
        </StyledAlert>
      ))}
    </AlertWrapper>
  );
};

export default Alert;
