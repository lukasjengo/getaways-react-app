import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  box-shadow: ${props => props.theme.shadows.light1};
  padding: 1.5rem 2.5rem;
  font-size: 1.5rem;
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapperLink = styled(Link)`
  display: flex;
  svg {
    width: 3.5rem;
    height: 3.5rem;
    fill: ${props => props.theme.colors.primary};
  }
`;

export const StyledLink = styled(Link)`
  align-items: center;
  display: flex;
  img {
    border-radius: 50%;
    width: 4rem;
  }

  span {
    margin-left: 0.5rem;
  }
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  font-weight: 600;
  transition: all 0.2s;

  span {
    margin-left: 0.5rem;
  }
`;
