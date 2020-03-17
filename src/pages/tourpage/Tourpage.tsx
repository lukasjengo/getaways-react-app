import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getCurrentTourRequest } from 'redux/tour/tourActions';

import ImageGallery from 'components/imageGallery/ImageGallery';
import TourCtaBar from 'components/tourCtaBar/TourCtaBar';
import Spinner from 'components/spinner/Spinner';
import CustomIcon from 'components/customIcon/CustomIcon';
import TourMap from 'components/tourMap/TourMap';

import {
  StyledMain,
  StyledSectionTop,
  StyledSectionDescription,
  FeatureContainer
} from './styles';
import { HeadingPrimary, HeadingSecondary, Paragraph } from 'styles/typography';

import { AppState } from 'redux/rootReducer';

const Tourpage: React.FC = () => {
  const dispatch = useDispatch();

  const { slug } = useParams();

  const tourId = slug!.substring(slug!.lastIndexOf('-') + 1);
  useEffect(() => {
    if (currentTour === null || currentTour.id !== tourId)
      dispatch(getCurrentTourRequest(tourId));
    //eslint-disable-next-line
  }, [tourId]);

  const isLoading = useSelector((state: AppState) => state.tour.isLoading);
  const currentTour = useSelector(
    (state: AppState) => state.tour.currentTour,
    shallowEqual
  );

  return (
    <StyledMain>
      {isLoading || currentTour === null ? (
        <Spinner color="primary" />
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
          <StyledSectionDescription>
            <div>
              <HeadingSecondary>About this tour</HeadingSecondary>
              <Paragraph>{currentTour.description}</Paragraph>
              <FeatureContainer>
                <div>
                  <CustomIcon name="icon-stopwatch" fill="whiteBg" /> Duration:{' '}
                  {currentTour.duration} days
                </div>
                <div>
                  <CustomIcon name="icon-users" fill="whiteBg" /> Group size: up
                  to {currentTour.maxGroupSize}
                </div>
                <div>
                  <CustomIcon name="icon-bar-graph" fill="whiteBg" />{' '}
                  Difficulty: {currentTour.difficulty}
                </div>
                <div>
                  <CustomIcon name="icon-location-pin" fill="whiteBg" />{' '}
                  Location: {currentTour.startLocation.description}
                </div>
              </FeatureContainer>
            </div>
          </StyledSectionDescription>
          <div>
            <TourMap currentTour={currentTour} />
          </div>
          <TourCtaBar currentTour={currentTour} />
        </Fragment>
      )}
    </StyledMain>
  );
};

export default Tourpage;
