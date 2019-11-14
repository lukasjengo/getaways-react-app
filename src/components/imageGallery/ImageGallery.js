import React from 'react';

import { ImageGalleryGrid } from './styles';

const ImageGallery = ({ imageCover, images }) => {
  return (
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
};

export default ImageGallery;
