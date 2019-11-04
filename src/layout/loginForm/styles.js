import styled from 'styled-components';

export const StyledForm = styled.form`
  max-width: 50rem;
  margin: 15rem auto;
  padding: 3rem 4rem;
  background-color: ${props => props.theme.colorWhiteBg};
`;

export const InputWrapper = styled.div`
  margin-bottom: 2.7rem;
  label {
    display: block;
  }
  input {
    border: none;
    border-radius: 3px;
    background-color: ${props => props.theme.colorGreyLight};
    color: ${props => props.theme.colorBlack};
  }
`;
