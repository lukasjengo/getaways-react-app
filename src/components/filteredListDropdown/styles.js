import styled from 'styled-components';

export const ModalWrapper = styled.ul`
  position: absolute;
  top: 3.5rem;
  left: 0;
  width: 100%;
  background-color: ${props => props.theme.colorWhiteBg};
  list-style: none;
  z-index: 50;

  box-shadow: ${props => props.theme.shadowLight2};
`;
