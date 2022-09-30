import React, { useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import PropTypes from 'prop-types';
import styles from "./Gallery.module.css"

export default function Gallery({images}) {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const openImageViewer = useCallback((index) => {
      setCurrentImage(index);
      setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
      setCurrentImage(0);
    setIsViewerOpen(false);
    };

    return (
      <ul className={styles.list}>
        {images.map((src, index) => (
          <li className={styles.item}>
            <div className={styles.box}>
              <img className={styles.image}
                src={ src }
                onClick={ () => openImageViewer(index) }
                key={ index }
                alt="Spaceship from SpaceX"
              />
            </div>
          </li>

        ))}

        {isViewerOpen && (
          <ImageViewer
            src={ images }
            currentIndex={ currentImage }
            disableScroll={ false }
            closeOnClickOutside={ true }
            onClose={ closeImageViewer }
          />
        )}
      </ul>
    );
}

Gallery.propTypes = {
    images: PropTypes.array.isRequired,
};