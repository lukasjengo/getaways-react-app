import styled from 'styled-components';

export const StyledContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.dark1};
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
  display: flex;
  align-items: center;

  h4 {
    font-size: 1.9rem;
  }

  span {
    font-size: 1.2rem;
  }
`;

export const StyledRightContainer = styled.div`
  span {
    font-size: 1.8rem;
    font-weight: 600;
    margin-right: 1rem;
  }
`;

export const StyledRatingContainer = styled.div`
  margin-right: 2rem;
  span {
    font-size: 2rem;
    font-weight: 600;
    margin-right: 2px;
  }
`;
