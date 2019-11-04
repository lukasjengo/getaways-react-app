import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${({ type, theme }) =>
    (type === 'primary' && `${theme.colorPrimary}`) ||
    (type === 'secondary' && `${theme.colorSecondary}`) ||
    `${theme.colorPrimary}`};
  color: ${props => props.theme.colorWhite};
  font-size: 1.4rem;
  padding: 0.5rem 2rem;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ type, theme }) =>
      (type === 'primary' && `${theme.colorPrimaryDark}`) ||
      (type === 'secondary' && `${theme.colorSecondaryDark}`) ||
      `${theme.colorPrimaryDark}`};
  }

  &:not(:last-child) {
    margin-right: 2rem;
  }
`;
