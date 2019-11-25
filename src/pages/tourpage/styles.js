import styled from 'styled-components';

export const StyledMain = styled.main`
  margin-bottom: 15rem;

  section {
    margin-top: 5rem;
  }
`;

export const StyledSectionTop = styled.section`
  max-width: 140rem;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledSectionDescription = styled.section`
  background-color: ${({ theme }) => theme.colorPrimary};
  color: ${({ theme }) => theme.colorWhite};

  div {
    padding: 5rem 0;
    max-width: 140rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const FeatureContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.6rem;
`;
