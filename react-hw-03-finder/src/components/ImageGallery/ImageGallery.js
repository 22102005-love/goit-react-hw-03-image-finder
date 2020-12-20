import React, { Component } from 'react';
import s from './ImageGallery.module.css';
import api from '../../servises/searchQuery-api';
import LoadMoreBtn from '../Button/Button';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Spiner from '../Loader/Loader';

class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.searchQuery;
    const nextQuery = this.props.searchQuery;
    const { page } = this.state.page;
    if (prevQuery !== nextQuery) {
      this.setState({ isLoading: true, images: [] });
      api.fetchImagesWithQuery(nextQuery, page).then(newImages =>
        this.setState(({ images, page }) => ({
          images: [...images, ...newImages.hits],
          page: page + 1,
          isLoading: false,
        })),
      );
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  handleLoadMore = () => {
    this.setState({ isLoading: true });
    return api
      .fetchImagesWithQuery(this.props.searchQuery, this.state.page)
      .then(newImages =>
        this.setState(({ images, page }) => ({
          images: [...images, ...newImages.hits],
          page: page + 1,
          isLoading: false,
        })),
      );
  };

  render() {
    const { images, isLoading } = this.state;
    return (
      <div>
        <ul className={s.ImageGallery}>
          {images.map(image => (
            <ImageGalleryItem
              srcForLarge={image.largeImageURL}
              src={image.webformatURL}
              key={image.id}
            />
          ))}
        </ul>
        {isLoading && <Spiner />}
        {images.length > 0 && (
          <LoadMoreBtn onClick={this.handleLoadMore}></LoadMoreBtn>
        )}
      </div>
    );
  }
}
export default ImageGallery;
