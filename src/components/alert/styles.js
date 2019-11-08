import styled from 'styled-components';

export const AlertWrapper = styled.div`
  position: fixed;
  top: 3rem;
  right: 5rem;
  z-index: 9999;
  font-size: 1.5rem;
`;

export const StyledAlert = styled.div`
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  border-radius: 3px;
  color: ${props => props.theme.colorWhite};
  box-shadow: ${props => props.theme.shadowLight1};
  ${({ type, theme }) =>
    (type === 'success' && `background-color: ${theme.colorSuccess}`) ||
    (type === 'danger' && `background-color: ${theme.colorDanger}`)};
`;
