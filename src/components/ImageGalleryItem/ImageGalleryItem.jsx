// import { Modal } from 'components/Modal/Modal';
import { Modal } from 'components/Modal/Modal';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  state = {
    modal: false,
    modalImg: '',
    alt: '',
  };
  togleModal = (modalImg, alt) => {
    this.setState(prevState => ({
      modal: !prevState.modal,
      modalImg,
      alt,
    }));
  };
  render() {
    const { webformatURL, largeImageURL, tags } = this.props;
    const { modal, modalImg, alt } = this.state;
    const { togleModal } = this;
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
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
