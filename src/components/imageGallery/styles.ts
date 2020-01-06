import styled from 'styled-components';

export const ImageGalleryGrid = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 2rem;

  img {
    display: block;
    width: 100%;
    border-radius: 3px;
    object-fit: cover;

    &:nth-of-type(1) {
      grid-column: span 2;
      height: 100%;
    }

    &:nth-of-type(2) {
      grid-row: span 2;
      height: 100%;
    }
  }
`;
