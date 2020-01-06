import React from 'react';

import { Link } from 'react-router-dom';

import CustomIcon from 'components/customIcon/CustomIcon';

import { StyledLi, RatingWrapper } from './styles';

interface FilteredListDropdownItemProps {
  id: string;
  name: string;
  location: string;
  startDate: string;
  slug: string;
  ratingsAverage: number;
}

const FilteredListDropdownItem: React.SFC<FilteredListDropdownItemProps> = ({
  id,
  name,
  location,
  startDate,
  slug,
  ratingsAverage,
}) => (
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

export default FilteredListDropdownItem;
