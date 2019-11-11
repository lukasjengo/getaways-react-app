import styled from 'styled-components';

export const Svg = styled.svg`
  fill: ${props => props.theme.colorPrimary};
  width: ${props => (props.size ? `${props.size}` : '1.8rem')};
  height: ${props => (props.size ? `${props.size}` : '1.8rem')};
  transition: all 0.2s;
`;
