import React from 'react';

import { SpinnerContainer, StyledSpinner } from './styles';
import { ThemeColorTypes } from 'styles/theme';

interface SpinnerProps {
  size?: string;
  color: ThemeColorTypes;
}

const Spinner: React.FC<SpinnerProps> = ({ size, color }) => (
  <SpinnerContainer size={size} data-testid="loading-spinner">
    <StyledSpinner size={size} color={color} />
  </SpinnerContainer>
);

export default Spinner;
