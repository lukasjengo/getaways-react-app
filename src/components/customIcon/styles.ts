import styled from 'styled-components';

interface SvgProps {
  fill: string | undefined;
  size: string | undefined;
}

export const Svg = styled.svg<SvgProps>`
  fill: ${props =>
    props.fill ? (props.theme as any)[props.fill] : props.theme.colorPrimary};
  width: ${props => (props.size ? `${props.size}` : '1.8rem')};
  height: ${props => (props.size ? `${props.size}` : '1.8rem')};
  transition: all 0.2s;
  vertical-align: sub;
`;
