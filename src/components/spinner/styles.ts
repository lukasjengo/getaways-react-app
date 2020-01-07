import styled, { keyframes } from 'styled-components';
import { ThemeColorTypes } from 'styles/theme';

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

interface SpinnerContainerProps {
  size?: string;
}

export const SpinnerContainer = styled.div<SpinnerContainerProps>`
  display: flex;
  justify-content: center;
  ${({ size }) => size !== 'small' && 'margin: 8rem 0;'}
`;

interface StyledSpinnerProps {
  size?: string;
  color: ThemeColorTypes;
}

export const StyledSpinner = styled.div<StyledSpinnerProps>`
  display: inline-block;
  text-align: center;
  ${({ size }) =>
    (size === 'small' && 'width: 2.7rem; height: 2.7rem') ||
    'width: 5rem; height: 5rem'}
  border: 3px solid rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  border-top-color: ${({ color, theme }) => theme.colors[color]};
  animation: ${spin} 1s ease-in-out infinite;
`;
