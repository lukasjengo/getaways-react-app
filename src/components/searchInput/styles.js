import styled from 'styled-components';
import variables from 'styles/variables';

export const StyledForm = styled.form`
  position: relative;
`;

export const StyledInput = styled.input`
  font: inherit;
  padding: 0.5rem 2.5rem;
  min-width: 45rem;
  border: none;
  border-radius: 2px;
  background-color: ${variables.colorGreyLight};
`;
