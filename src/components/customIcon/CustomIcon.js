import React from 'react';
import PropTypes from 'prop-types';

import { Svg } from './styles';

import sprite from 'assets/ui-icon-sprites.svg';

const CustomIcon = ({ name, size }) => (
  <Svg size={size}>
    <use xlinkHref={`${sprite}#${name}`}></use>
  </Svg>
);

CustomIcon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string
};

export default CustomIcon;
