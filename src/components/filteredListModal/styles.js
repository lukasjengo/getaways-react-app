import styled from 'styled-components';
import variables from 'styles/variables';

export const ModalWrapper = styled.ul`
  position: absolute;
  top: 3.5rem;
  left: 0;
  width: 100%;
  background-color: ${variables.colorWhiteBg};
  list-style: none;
  z-index: 50;

  box-shadow: ${variables.shadowLight2};
`;
