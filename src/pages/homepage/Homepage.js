import React from 'react';

import CardList from 'components/cardList/CardList';

import { StyledMain, StyledSection } from './styles';

const Homepage = () => {
  return (
    <StyledMain>
      <StyledSection>
        <CardList />
      </StyledSection>
    </StyledMain>
  );
};

export default Homepage;
