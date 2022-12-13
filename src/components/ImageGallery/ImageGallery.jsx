import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';

export const ImageGallery = ({ data }) => {
  return (
    <>
      {data.length > 0 && (
        <ul className="gallery">
          <ImageGalleryItem data={data} />
        </ul>
      )}
    </>
  );
};
