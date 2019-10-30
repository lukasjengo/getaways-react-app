import styled from 'styled-components';
import { Link } from 'react-router-dom';
import variables from 'styles/variables';

export const StyledHeader = styled.header`
  box-shadow: ${variables.shadowLight1};
  padding: 1.5rem 2.5rem;
  font-size: 1.5rem;
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const LogoWrapperLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${variables.colorPrimary};
  &:active,
  &:hover {
    color: ${variables.colorTertiary};
  }

  svg {
    width: 3.5rem;
    height: 3.5rem;
    fill: ${variables.colorPrimary};
  }

  span {
    margin-left: 1rem;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  li:not(:last-child) {
    margin-right: 2rem;
  }
`;
