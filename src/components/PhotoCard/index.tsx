import React, { useEffect, useState } from 'react';
import './PhotoCard.scss';

export const images = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/6087668/pexels-photo-6087668.jpeg?auto=compress&cs=tinysrgb&w=640&h=960&dpr=1',
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/6061698/pexels-photo-6061698.jpeg?auto=compress&cs=tinysrgb&w=640&h=960&dpr=1',
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/6033681/pexels-photo-6033681.jpeg?auto=compress&cs=tinysrgb&w=640&h=960&dpr=1',
  },
  {
    id: 4,
    url: 'https://images.pexels.com/photos/6061857/pexels-photo-6061857.jpeg?auto=compress&cs=tinysrgb&w=640&h=960&dpr=1',
  },
  {
    id: 5,
    url: 'https://images.pexels.com/photos/6033681/pexels-photo-6033681.jpeg?auto=compress&cs=tinysrgb&w=640&h=960&dpr=1',
  },
  {
    id: 6,
    url: 'https://images.pexels.com/photos/6087668/pexels-photo-6087668.jpeg?auto=compress&cs=tinysrgb&w=640&h=960&dpr=1',
  },
  {
    id: 7,
    url: 'https://images.pexels.com/photos/6061857/pexels-photo-6061857.jpeg?auto=compress&cs=tinysrgb&w=640&h=960&dpr=1',
  },
];

function PhotoCard() {
  return (
      <div className="images">
        {images.map((img, index) => (
          <div className="imageCard">
            <img src={img.url} alt="albun" className="image" />
          </div>
        ))}
      </div>
  );
}

export default PhotoCard;
