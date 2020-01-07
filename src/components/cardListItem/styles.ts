import styled from 'styled-components';

export const StyledListItem = styled.li`
  margin: 0rem 1rem 2rem 1rem;
  width: 30rem;
  font-size: 1.2rem;

  h4 {
    font-size: 1.6rem;

    &::after {
      content: '';
      display: block;
      width: 0;
      height: 2px;
      background-color: ${props => props.theme.colors.primary};
      transition: all 0.4s;
    }
  }

  &:hover {
    h4::after {
      width: 7rem;
    }
  }
`;

export const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    display: flex;
    font-size: 1.3rem;
  }

  svg {
    margin-left: 3px;
  }
`;

interface StyledImageContainerProps {
  imageCover: string;
}

export const StyledImageContainer = styled.div<StyledImageContainerProps>`
  background-image: ${({ imageCover }) =>
    `url(${process.env.REACT_APP_SERVER_UPLOADS_URL}/tours/${imageCover})`};
  background-size: cover;
  background-position: center;
  border-radius: 3px;
  width: 100%;
  height: 20rem;
`;
