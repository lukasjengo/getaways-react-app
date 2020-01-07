import React from 'react';

import { Svg } from './styles';

import sprite from 'assets/ui-icon-sprites.svg';
import { ThemeColorTypes } from 'styles/theme';

interface CustomIconProps {
  name: string;
  size?: string;
  fill?: ThemeColorTypes;
}

const CustomIcon: React.SFC<CustomIconProps> = ({ name, size, fill }) => (
  <Svg size={size} fill={fill}>
    <use xlinkHref={`${sprite}#${name}`}></use>
  </Svg>
);

export default CustomIcon;
