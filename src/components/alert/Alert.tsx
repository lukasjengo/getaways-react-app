import React from 'react';
import { useSelector } from 'react-redux';

import { AlertWrapper, StyledAlert } from './styles';
import { AppState } from 'redux/root-reducer';

const Alert: React.FC = () => {
  const alerts = useSelector((state: AppState) => state.alerts);
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
