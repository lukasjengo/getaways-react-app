import styled from 'styled-components';
import { ThemeColorTypes } from 'styles/theme';

interface SvgProps {
  fill: ThemeColorTypes | undefined;
  size: string | undefined;
}

export const Svg = styled.svg<SvgProps>`
  fill: ${props =>
    props.fill ? props.theme.colors[props.fill] : props.theme.colors.primary};
  width: ${props => (props.size ? `${props.size}` : '1.8rem')};
  height: ${props => (props.size ? `${props.size}` : '1.8rem')};
  transition: all 0.2s;
  vertical-align: sub;
`;
