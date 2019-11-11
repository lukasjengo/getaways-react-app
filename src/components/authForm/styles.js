import styled from 'styled-components';

export const FormWrapper = styled.div`
  max-width: 40rem;
  margin: 10rem auto;
  padding: 3rem 4rem;
  background-color: ${props => props.theme.colorWhiteBg};
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
