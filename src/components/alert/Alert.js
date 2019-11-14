import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { AlertWrapper, StyledAlert } from './styles';

const Alert = ({ alerts }) => {
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

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  alerts: state.alerts,
});

export default connect(mapStateToProps)(Alert);
