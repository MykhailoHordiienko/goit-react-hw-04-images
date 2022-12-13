import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Modal extends Component {
  handleClickBacdrop = e => {
    if (e.target === e.currentTarget) {
      this.props.togleModal();
    }
  };
  closeModalEsc = e => {
    if (e.code === 'Escape') {
      this.props.togleModal();
    }
  };
  componentDidMount() {
    window.addEventListener('keydown', this.closeModalEsc);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModalEsc);
  }

  render() {
    const { imgUrl, alt } = this.props;
    const { handleClickBacdrop } = this;
    return (
      <div className="overlay" onClick={handleClickBacdrop}>
        <div className="modal">
          <img src={imgUrl} alt={alt} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  imgUrl: PropTypes.array.isRequired,
  alt: PropTypes.string.isRequired,
};
