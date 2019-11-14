import React from 'react';

import CustomButton from 'components/customButton/CustomButton';

import {
  StyledContainer,
  StyledFlexContainer,
  StyledLeftContainer,
  StyledRightContainer,
} from './styles';

const TourCtaBar = ({ currentTour }) => {
  return (
    <StyledContainer>
      <StyledFlexContainer>
        <StyledLeftContainer>
          <h4>{currentTour.name}</h4>
          <span>{currentTour.duration} day tour</span>
        </StyledLeftContainer>
        <StyledRightContainer>
          <span>{currentTour.price}€ / person</span>
          <CustomButton>Book tour</CustomButton>
        </StyledRightContainer>
      </StyledFlexContainer>
    </StyledContainer>
  );
};

export default TourCtaBar;
