import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import CardListItem from 'components/cardListItem/CardListItem';

import { StyledList } from './styles';
import { AppState } from 'redux/root-reducer';

const CardList: React.FC = () => {
  const tours = useSelector(
    (state: AppState) => state.tour.allTours,
    shallowEqual
  );
  return (
    <StyledList>
      {tours.map(tour => (
        <CardListItem
          key={tour.id}
          id={tour.id}
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

export default CardList;
