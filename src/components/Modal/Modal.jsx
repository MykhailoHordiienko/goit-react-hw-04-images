import React, { Component } from 'react';

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
