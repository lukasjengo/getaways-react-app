import React from 'react';

import CustomButton from 'components/customButton/CustomButton';
import CustomIcon from 'components/customIcon/CustomIcon';

import {
  StyledContainer,
  StyledFlexContainer,
  StyledLeftContainer,
  StyledRightContainer,
  StyledRatingContainer,
} from './styles';

import { Tour } from 'models/Tour';

interface TourCtaBarProps {
  currentTour: Tour;
}

const TourCtaBar: React.FC<TourCtaBarProps> = ({ currentTour }) => {
  return (
    <StyledContainer>
      <StyledFlexContainer>
        <StyledLeftContainer>
          <StyledRatingContainer>
            <span>{currentTour.ratingsAverage}</span>
            <CustomIcon name="icon-star" size="2.2rem" />
          </StyledRatingContainer>
          <div>
            <h4>{currentTour.name}</h4>
            <span>{currentTour.duration} day tour</span>
          </div>
        </StyledLeftContainer>
        <StyledRightContainer>
          <span>{currentTour.price}€ / person</span>
          <CustomButton size="2rem">Book tour</CustomButton>
        </StyledRightContainer>
      </StyledFlexContainer>
    </StyledContainer>
  );
};

export default TourCtaBar;
