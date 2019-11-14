import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';

import { getCurrentTour } from 'redux/tour/tourActions';

import ImageGallery from 'components/imageGallery/ImageGallery';
import TourCtaBar from 'components/tourCtaBar/TourCtaBar';
import Spinner from 'components/spinner/Spinner';

import { StyledMain } from './styles';

const Tourpage = ({ match, currentTour, getCurrentTour, isLoading }) => {
  const tourId = match.params.slug.substring(
    match.params.slug.lastIndexOf('-') + 1
  );
  useEffect(() => {
    if (currentTour === null || currentTour.id !== tourId)
      getCurrentTour(tourId);
    //eslint-disable-next-line
  }, []);

  return (
    <StyledMain>
      {isLoading || currentTour === null ? (
        <Spinner color="colorPrimary" />
      ) : (
        <Fragment>
          <section>
            <h1>
              {currentTour.duration} Day Tour - {currentTour.name}
            </h1>
            <p>{currentTour.summary}</p>
            <ImageGallery
              imageCover={currentTour.imageCover}
              images={currentTour.images}
            />
          </section>
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
