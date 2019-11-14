import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import CustomIcon from 'components/customIcon/CustomIcon';

import { StyledLi, RatingWrapper } from './styles';

const FilteredListDropdownItem = ({
  id,
  name,
  location,
  startDate,
  slug,
  ratingsAverage,
}) => {
  return (
    <StyledLi>
      <Link to={`/tour/${slug}-${id}`}>
        <h4>{name}</h4>
        <p>
          {location} | starts: {startDate}
        </p>
        <RatingWrapper>
          <span>{ratingsAverage}</span>
          <CustomIcon name="icon-star" />
        </RatingWrapper>
      </Link>
    </StyledLi>
  );
};

FilteredListDropdownItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default FilteredListDropdownItem;
