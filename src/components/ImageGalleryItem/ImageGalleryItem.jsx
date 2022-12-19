import { Modal } from 'components/Modal/Modal';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
  const [modal, setModal] = useState(false);
  const [modalImg, setModalImg] = useState('');
  const [alt, setAlt] = useState('');

  const togleModal = (modalImg, alt) => {
    setModal(prev => !prev);
    setModalImg(modalImg);
    setAlt(alt);
  };

  return (
    <>
      <li className="gallery-item">
        <img
          className="image"
          src={webformatURL}
          alt={tags}
          onClick={() => togleModal(largeImageURL, tags)}
        />
      </li>

      {modal && <Modal imgUrl={modalImg} alt={alt} togleModal={togleModal} />}
    </>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
