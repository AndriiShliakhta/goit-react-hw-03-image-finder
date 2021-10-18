import React from 'react';

function ImageGalleryItem({ webformatURL }) {
  return (
    <li className="ImageGalleryItem">
      <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
    </li>
  );
}
export default ImageGalleryItem;
