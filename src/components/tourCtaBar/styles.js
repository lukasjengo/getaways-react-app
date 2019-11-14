import styled from 'styled-components';

export const StyledContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0.5rem 2rem;
  background-color: ${({ theme }) => theme.colorWhite};
  box-shadow: ${({ theme }) => theme.shadowDark1};
  z-index: 500;
`;

export const StyledFlexContainer = styled.div`
  display: flex;
  max-width: 128rem;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLeftContainer = styled.div`
  h4 {
    font-size: 1.6rem;
  }

  span {
    text-transform: uppercase;
  }
`;

export const StyledRightContainer = styled.div`
  span {
    font-size: 1.5rem;
    font-weight: 600;
    margin-right: 1rem;
  }
`;
