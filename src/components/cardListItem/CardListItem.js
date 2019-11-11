import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import CustomIcon from 'components/customIcon/CustomIcon';

import { StyledImageContainer, StyledListItem, HeadingWrapper } from './styles';

const CardListItem = ({ name, imageCover, summary, slug, ratingsAverage }) => {
  return (
    <StyledListItem>
      <Link to={`/tour/${slug}`}>
        <StyledImageContainer imageCover={imageCover} />
        <HeadingWrapper>
          <h4>{name}</h4>
          <span>
            {ratingsAverage}
            <CustomIcon name='icon-star' />
          </span>
        </HeadingWrapper>
        <p>{summary}</p>
      </Link>
    </StyledListItem>
  );
};

CardListItem.propTypes = {
  name: PropTypes.string.isRequired,
  imageCover: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  ratingsAverage: PropTypes.number.isRequired
};

export default CardListItem;
