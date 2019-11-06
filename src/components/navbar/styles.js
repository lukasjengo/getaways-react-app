import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  box-shadow: ${props => props.theme.shadowLight1};
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
  color: ${props => props.theme.colorPrimary};
  &:active,
  &:hover {
    color: ${props => props.theme.colorSecondary};
  }

  svg {
    width: 3.5rem;
    height: 3.5rem;
    fill: ${props => props.theme.colorPrimary};
  }

  span {
    margin-left: 1rem;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;

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
    margin-right: 0.5rem;
  }

  &:hover {
    color: ${props => props.theme.colorSecondary};

    svg {
      fill: ${props => props.theme.colorSecondary};
    }
  }
`;
