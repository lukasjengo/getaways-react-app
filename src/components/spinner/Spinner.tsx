import React from 'react';

import { SpinnerContainer, StyledSpinner } from './styles';

interface SpinnerProps {
  size?: string;
  color: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size, color }) => (
  <SpinnerContainer size={size}>
    <StyledSpinner size={size} color={color} />
  </SpinnerContainer>
);

export default Spinner;
