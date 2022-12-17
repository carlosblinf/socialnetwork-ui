import React, { useEffect, useState } from 'react';
import './AlbunCard.scss';
import { Image } from '../../utils/types';
import { useGlobal } from '../../contex/GlobalContext';
import { MdLocalSee } from 'react-icons/md';

// export const images = [
//   {
//     id: 1,
//     url: 'https://images.pexels.com/photos/6087668/pexels-photo-6087668.jpeg?auto=compress&cs=tinysrgb&w=640&h=960&dpr=1',
//   },
//   {
//     id: 2,
//     url: 'https://images.pexels.com/photos/6061698/pexels-photo-6061698.jpeg?auto=compress&cs=tinysrgb&w=640&h=960&dpr=1',
//   },
//   {
//     id: 3,
//     url: 'https://images.pexels.com/photos/6033681/pexels-photo-6033681.jpeg?auto=compress&cs=tinysrgb&w=640&h=960&dpr=1',
//   },
//   {
//     id: 4,
//     url: 'https://images.pexels.com/photos/6061857/pexels-photo-6061857.jpeg?auto=compress&cs=tinysrgb&w=640&h=960&dpr=1',
//   },
//   {
//     id: 5,
//     url: 'https://images.pexels.com/photos/6033681/pexels-photo-6033681.jpeg?auto=compress&cs=tinysrgb&w=640&h=960&dpr=1',
//   },
//   {
//     id: 6,
//     url: 'https://images.pexels.com/photos/6087668/pexels-photo-6087668.jpeg?auto=compress&cs=tinysrgb&w=640&h=960&dpr=1',
//   },
//   {
//     id: 7,
//     url: 'https://images.pexels.com/photos/6061857/pexels-photo-6061857.jpeg?auto=compress&cs=tinysrgb&w=640&h=960&dpr=1',
//   },
// ];
type AlbunCardProps = {
  images?: Image[];
};

function AlbunCard({ images }: AlbunCardProps) {
  const { changeImages, openModal } = useGlobal();
  if (!images) return null;

  const img = images[0];
  console.log(images);

  function handleOnclick() {
    if (images && images?.length > 0) {
      changeImages(images);
      openModal();
    }
  }

  return (
    <div className="albunCard">
      <div
        onClick={() => handleOnclick()}
        className="image"
        key={img.id}
        style={{
          background: `url(${img.url}) center / cover`,
        }}
      >
        <span>
          <MdLocalSee /> {images.length}
        </span>
      </div>
      {/* <img
        src={img.url}
        alt="albun"
        className="image"
        onClick={() => handleOnclick()}
      /> */}
    </div>
  );
}

export default AlbunCard;
