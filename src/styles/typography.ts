import styled from 'styled-components';

export const HeadingPrimary = styled.h1`
  font-size: 4rem;
  margin-bottom: 1.2rem;

  &::after {
    content: '';
    display: block;
    width: 15rem;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const HeadingSecondary = styled.h2`
  font-size: 2.7rem;
  margin-bottom: 1.2rem;
`;

export const Paragraph = styled.p`
  font-size: 1.8rem;
  margin-bottom: 1.2rem;
`;
