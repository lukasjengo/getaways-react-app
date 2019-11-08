import styled from 'styled-components';

export const StyledForm = styled.form`
  position: relative;
`;

export const StyledInput = styled.input`
  font: inherit;
  padding: 0.5rem 2.5rem;
  border: none;
  border-radius: 2px;
  outline: none;
  min-width: 45rem;
  color: ${props => props.theme.colorBlack};
  background-color: ${props => props.theme.colorGreyLight};
`;
