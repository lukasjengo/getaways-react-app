import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectAllTours } from 'redux/tour/tourSelectors';

import CardListItem from 'components/cardListItem/CardListItem';

import { StyledList } from './styles';

const CardList = ({ tours }) => {
  return (
    <StyledList>
      {tours.map(tour => (
        <CardListItem
          key={tour.id}
          name={tour.name}
          imageCover={tour.imageCover}
          summary={tour.summary}
          ratingsAverage={tour.ratingsAverage}
          slug={tour.slug}
        />
      ))}
    </StyledList>
  );
};

CardList.propTypes = {
  tours: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  tours: selectAllTours(state)
});

export default connect(mapStateToProps)(CardList);
