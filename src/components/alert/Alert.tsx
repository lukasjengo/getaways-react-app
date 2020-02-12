import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import { AlertWrapper, StyledAlert } from './styles';
import { AppState } from 'redux/rootReducer';

const Alert: React.FC = () => {
  const alerts = useSelector((state: AppState) => state.alerts, shallowEqual);
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
