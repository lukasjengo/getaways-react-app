import styled from 'styled-components';

export const ModalWrapper = styled.ul`
  position: absolute;
  top: 3.7rem;
  left: 0;
  width: 100%;
  max-height: 25rem;
  background-color: ${props => props.theme.colors.whiteBg};
  list-style: none;
  z-index: 50;
  overflow: auto;
`;
