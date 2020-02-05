import React from 'react';
import { Link } from 'react-router-dom';

import CustomIcon from 'components/customIcon/CustomIcon';

import { StyledImageContainer, StyledListItem, HeadingWrapper } from './styles';

interface CardListItemProps {
  id: string;
  name: string;
  imageCover: string;
  summary: string;
  slug: string;
  ratingsAverage: number;
}

const CardListItem: React.SFC<CardListItemProps> = ({
  id,
  name,
  imageCover,
  summary,
  slug,
  ratingsAverage
}) => (
  <StyledListItem>
    <Link to={`/tour/${slug}-${id}`}>
      <StyledImageContainer imageCover={imageCover} />
      <HeadingWrapper>
        <h4>{name}</h4>
        <span>
          {ratingsAverage}
          <CustomIcon name="icon-star" />
        </span>
      </HeadingWrapper>
      <p>{summary}</p>
    </Link>
  </StyledListItem>
);

export default CardListItem;
