import styled from 'styled-components';

export const StyledForm = styled.form`
  position: relative;
`;

export const StyledInput = styled.input`
  font: inherit;
  padding: 0.5rem 2.5rem;
  border: 1px solid transparent;
  border-radius: 2px;
  outline: none;
  min-width: 45rem;
  color: ${props => props.theme.colors.black};
  background-color: ${props => props.theme.colors.greyLight};

  &:focus {
    border: 1px solid ${props => props.theme.colors.primary};
  }
`;
