import styled from 'styled-components';

export const Svg = styled.svg`
  fill: ${props =>
    props.fill ? props.theme[props.fill] : props.theme.colorPrimary};
  width: ${props => (props.size ? `${props.size}` : '1.8rem')};
  height: ${props => (props.size ? `${props.size}` : '1.8rem')};
  transition: all 0.2s;
  vertical-align: sub;
`;
