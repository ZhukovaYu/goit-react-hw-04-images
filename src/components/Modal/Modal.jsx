import React, { useEffect } from 'react';
import style from './Modal.module.css';

export const Modal = ({ largeImageURL, onClose }) => {
  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className={style.overlay} onClick={handleBackdropClick}>
      <div className={style.modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};
