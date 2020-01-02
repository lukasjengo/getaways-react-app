import styled from 'styled-components';
import { AlertTypes } from 'models/Alert';

export const AlertWrapper = styled.div`
  position: fixed;
  top: 7.5rem;
  right: 6rem;
  z-index: 9999;
  font-size: 1.5rem;
`;

interface StyledAlertProps {
  type: AlertTypes;
}

export const StyledAlert = styled.div<StyledAlertProps>`
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  border-radius: 3px;
  color: ${props => props.theme.colorWhite};
  box-shadow: ${props => props.theme.shadowLight1};
  ${({ type, theme }) =>
    (type === 'success' && `background-color: ${theme.colorSuccess}`) ||
    (type === 'danger' && `background-color: ${theme.colorDanger}`)};
`;
