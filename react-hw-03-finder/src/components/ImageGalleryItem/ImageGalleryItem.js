import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import s from './ImageGalleryItem.module.css';
class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { src, srcForLarge } = this.props;
    const { showModal } = this.state;
    return (
      <div>
        <li onClick={this.toggleModal} className={s.ImageGalleryItem}>
          <img src={src} alt="" className={s.ImageGalleryItemImage} />
        </li>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={srcForLarge} alt="большая картинка"></img>
          </Modal>
        )}
      </div>
    );
  }
}
export default ImageGalleryItem;
