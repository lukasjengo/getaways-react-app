import styled from 'styled-components';

export const InputWrapper = styled.div`
  margin-bottom: 2.7rem;
  label {
    display: block;
    text-transform: capitalize;
  }
  input {
    border: none;
    border-radius: 3px;
    background-color: ${props => props.theme.colorGreyLight};
    color: ${props => props.theme.colorBlack};
  }
`;
