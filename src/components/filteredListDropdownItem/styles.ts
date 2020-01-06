import styled from 'styled-components';

export const StyledLi = styled.li`
  position: relative;
  padding: 0.5rem 1rem;
  transition: all 0.2s;

  p {
    font-size: 1.2rem;
  }

  &:hover {
    background-color: ${props => props.theme.colorGreyLight};
  }
`;

export const RatingWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1rem;

  span {
    font-size: 1.3rem;
  }

  svg {
    margin-left: 3px;
  }
`;
