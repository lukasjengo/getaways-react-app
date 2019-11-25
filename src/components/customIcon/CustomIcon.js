import React from 'react';
import PropTypes from 'prop-types';

import { Svg } from './styles';

import sprite from 'assets/ui-icon-sprites.svg';

const CustomIcon = ({ name, size, fill }) => (
  <Svg size={size} fill={fill}>
    <use xlinkHref={`${sprite}#${name}`}></use>
  </Svg>
);

CustomIcon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
  fill: PropTypes.string,
};

export default CustomIcon;
