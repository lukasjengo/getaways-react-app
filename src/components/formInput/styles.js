import styled from 'styled-components';

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
    border: 1px solid ${props => props.theme.colorGreyLight};
    width: 100%;
    border-radius: 3px;
    padding: 0.75rem 1rem;
    color: ${props => props.theme.colorBlack};
    background-color: ${props => props.theme.colorWhite};

    &:focus {
      border: 1px solid ${props => props.theme.colorSuccess};
    }

    &:focus:invalid {
      border: 1px solid ${props => props.theme.colorDanger};
    }
  }
`;
