import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export const Modal = ({ imgUrl, alt, togleModal }) => {
  const handleClickBacdrop = e => {
    if (e.target === e.currentTarget) {
      togleModal();
    }
  };
  const closeModalEsc = e => {
    if (e.code === 'Escape') {
      togleModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', closeModalEsc);

    return () => {
      window.removeEventListener('keydown', closeModalEsc);
    };
  });

  return (
    <div className="overlay" onClick={handleClickBacdrop}>
      <div className="modal">
        <img src={imgUrl} alt={alt} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
