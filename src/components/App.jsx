import React, { useState, useEffect } from 'react';
import { fetchImages } from 'service/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { SearchBar } from './SearchBar/SearchBar';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [modalImage, setModalImage] = useState('');
  const [showBtn, setShowBtn] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');

  useEffect(() => {
    if (!query) return;
    fetchImages(query, page)
      .then((data) => {
        if (data.hits.length === 0) {
          alert('We didn`t find any photos');
          return;
        }
        setImages((prevImages) => [...prevImages, ...data.hits]);
        setShowBtn(page < Math.ceil(data.totalHits / 12));
      })
      .catch((error) => {
        console.error(error);
      });
  }, [query, page]);

  const handleSubmit = (query) => {
    setQuery(query);
    setImages([]);
    setPage(1);
    setModalImage('');
    setShowBtn(false);
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (largeImageURL) => {
    setLargeImageURL(largeImageURL);
  };

  const closeModal = () => {
    setLargeImageURL('');
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <ImageGallery images={images} openModal={openModal} />
      {showBtn && (
        <button type="button" className="load-more" onClick={loadMore}>
          Load more
        </button>
      )}
      {largeImageURL && (
        <Modal largeImageURL={largeImageURL} onClose={closeModal} />
      )}
    </>
  );
};

export default App;

