import styled from 'styled-components';

export const FormWrapper = styled.div`
  max-width: 40rem;
  margin: 10rem auto;
  padding: 3rem 4rem;
  background-color: ${props => props.theme.colors.whiteBg};
`;

export const StyledForm = styled.form`
  margin-bottom: 2rem;
`;

export const StyledDiv = styled.div`
  button {
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`;

export const InputWrapper = styled.div`
  font-size: 1.4rem;
  margin-bottom: 2.2rem;
  label {
    display: inline-block;
    margin-bottom: 0.5rem;
    margin-left: 2px;
    text-transform: capitalize;
  }
  input {
    font: inherit;
    display: block;
    outline: none;
    border: 1px solid ${props => props.theme.colors.greyLight};
    width: 100%;
    border-radius: 3px;
    padding: 0.75rem 1rem;
    color: ${props => props.theme.colors.black};
    background-color: ${props => props.theme.colors.white};

    &:focus {
      border: 1px solid ${props => props.theme.colors.success};
    }

    &:focus:invalid {
      border: 1px solid ${props => props.theme.colors.danger};
    }
  }
`;
