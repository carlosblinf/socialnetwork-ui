import React, { useEffect, useState } from 'react';
import './PhotoCard.scss';
import { images } from '../../store/data';

function PhotoCard() {
  return (
    <div className="images">
      {images.map((img, index) => (
        <div className="imageCard" key={img.id}>
          <img src={img.url} alt="albun" className="image" />
        </div>
      ))}
    </div>
  );
}

export default PhotoCard;
