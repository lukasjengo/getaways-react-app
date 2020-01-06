import React from 'react';

import { Svg } from './styles';

import sprite from 'assets/ui-icon-sprites.svg';

interface CustomIconProps {
  name: string;
  size?: string;
  fill?: string;
}

const CustomIcon: React.SFC<CustomIconProps> = ({ name, size, fill }) => (
  <Svg size={size} fill={fill}>
    <use xlinkHref={`${sprite}#${name}`}></use>
  </Svg>
);

export default CustomIcon;
