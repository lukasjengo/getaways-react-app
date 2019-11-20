import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${({ color, theme }) =>
    (color === 'primary' && `${theme.colorPrimary}`) ||
    (color === 'secondary' && `${theme.colorSecondary}`) ||
    `${theme.colorPrimary}`};
  color: ${props => props.theme.colorWhite};
  font-size: ${({ size }) => (size ? `${size}` : '1.4rem')};
  border-radius: 3px;
  padding: 0.5rem 2rem;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ color, theme }) =>
      (color === 'primary' && `${theme.colorPrimaryDark}`) ||
      (color === 'secondary' && `${theme.colorSecondaryDark}`) ||
      `${theme.colorPrimaryDark}`};
  }

  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

export const StyledButtonUnderline = styled.button`
  color: ${props => props.theme.colorSecondary};
  font-size: ${({ size }) => (size ? `${size}` : '1.2rem')};
  transition: all 0.2s;
  border-bottom: 1px solid ${props => props.theme.colorSecondary};

  &:hover {
    color: ${props => props.theme.colorSecondaryDark};
    border-bottom: 1px solid ${props => props.theme.colorSecondaryDark};
    transform: scale(1.02);
  }

  &:not(:last-child) {
    margin-right: 2rem;
  }
`;
