import styled from 'styled-components';

interface ButtonProps {
  size?: string;
  color?: string;
}

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ color, theme }) =>
    (color === 'primary' && `${theme.colors.primary}`) ||
    (color === 'secondary' && `${theme.colors.secondary}`) ||
    `${theme.colors.primary}`};
  color: ${props => props.theme.colors.white};
  font-size: ${({ size }) => (size ? `${size}` : '1.4rem')};
  border-radius: 3px;
  padding: 0.5rem 2rem;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ color, theme }) =>
      (color === 'primary' && `${theme.colors.primaryDark}`) ||
      (color === 'secondary' && `${theme.colors.secondaryDark}`) ||
      `${theme.colors.primaryDark}`};
  }

  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

export const StyledButtonUnderline = styled.button<ButtonProps>`
  color: ${props => props.theme.colors.secondary};
  font-size: ${({ size }) => (size ? `${size}` : '1.2rem')};
  transition: all 0.2s;
  border-bottom: 1px solid ${props => props.theme.colors.secondary};

  &:hover {
    color: ${props => props.theme.colors.secondaryDark};
    border-bottom: 1px solid ${props => props.theme.colors.secondaryDark};
    transform: scale(1.02);
  }

  &:not(:last-child) {
    margin-right: 2rem;
  }
`;
