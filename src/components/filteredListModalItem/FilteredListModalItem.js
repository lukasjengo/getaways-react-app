import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const FilteredListModalItem = ({ name, location, startDate, slug }) => {
  return (
    <li>
      <Link to={`/tour/${slug}`}>
        <h4>{name}</h4>
        <p>
          {location} | starts: {startDate}
        </p>
      </Link>
    </li>
  );
};

FilteredListModalItem.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired
};

export default FilteredListModalItem;
