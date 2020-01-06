import React from 'react';

import { ImageGalleryGrid } from './styles';

interface ImageGalleryProps {
  imageCover: string;
  images: string[];
}

const ImageGallery: React.SFC<ImageGalleryProps> = ({ imageCover, images }) => (
  <ImageGalleryGrid>
    <img
      src={`${process.env.REACT_APP_SERVER_UPLOADS_URL}/tours/${imageCover}`}
      alt=""
    />
    {images.map((img, index) => (
      <img
        key={index}
        src={`${process.env.REACT_APP_SERVER_UPLOADS_URL}/tours/${img}`}
        alt=""
      />
    ))}
  </ImageGalleryGrid>
);

export default ImageGallery;
