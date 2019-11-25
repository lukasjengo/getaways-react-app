import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';

import { getCurrentTour } from 'redux/tour/tourActions';

import ImageGallery from 'components/imageGallery/ImageGallery';
import TourCtaBar from 'components/tourCtaBar/TourCtaBar';
import Spinner from 'components/spinner/Spinner';
import CustomIcon from 'components/customIcon/CustomIcon';
import Map from 'components/map/Map';

import {
  StyledMain,
  StyledSectionTop,
  StyledSectionDescription,
  FeatureContainer,
} from './styles';
import { HeadingPrimary, HeadingSecondary, Paragraph } from 'styles/typography';

const Tourpage = ({ match, currentTour, getCurrentTour, isLoading }) => {
  const tourId = match.params.slug.substring(
    match.params.slug.lastIndexOf('-') + 1
  );
  useEffect(() => {
    if (currentTour === null || currentTour.id !== tourId)
      getCurrentTour(tourId);
    //eslint-disable-next-line
  }, [tourId]);

  return (
    <StyledMain>
      {isLoading || currentTour === null ? (
        <Spinner color="colorPrimary" />
      ) : (
        <Fragment>
          <StyledSectionTop>
            <HeadingPrimary>
              {currentTour.duration} Day Tour - {currentTour.name}
            </HeadingPrimary>
            <Paragraph>{currentTour.summary}</Paragraph>
            <ImageGallery
              imageCover={currentTour.imageCover}
              images={currentTour.images}
            />
          </StyledSectionTop>
          <StyledSectionDescription background="colorPrimary" fullWidth={true}>
            <div>
              <HeadingSecondary>About this tour</HeadingSecondary>
              <Paragraph>{currentTour.description}</Paragraph>
              <FeatureContainer>
                <div>
                  <CustomIcon name="icon-stopwatch" fill="colorWhiteBg" />{' '}
                  Duration: {currentTour.duration} days
                </div>
                <div>
                  <CustomIcon name="icon-users" fill="colorWhiteBg" /> Group
                  size: up to {currentTour.maxGroupSize}
                </div>
                <div>
                  <CustomIcon name="icon-bar-graph" fill="colorWhiteBg" />{' '}
                  Difficulty: {currentTour.difficulty}
                </div>
                <div>
                  <CustomIcon name="icon-location-pin" fill="colorWhiteBg" />{' '}
                  Location: {currentTour.startLocation.description}
                </div>
              </FeatureContainer>
            </div>
          </StyledSectionDescription>
          <div>
            <Map currentTour={currentTour} />
          </div>
          <TourCtaBar currentTour={currentTour} />
        </Fragment>
      )}
    </StyledMain>
  );
};

const mapStateToProps = state => ({
  currentTour: state.tour.currentTour,
  isLoading: state.tour.isLoading,
});

export default connect(mapStateToProps, { getCurrentTour })(Tourpage);
