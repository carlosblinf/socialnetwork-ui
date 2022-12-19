import React, { useEffect, useState } from 'react';
import './AlbunCard.scss';
import { Image } from '../../utils/types';
import { useGlobal } from '../../contex/GlobalContext';
import { MdLocalSee } from 'react-icons/md';

type AlbunCardProps = {
  images: Image[];
};

function AlbunCard({ images }: AlbunCardProps) {
  const { changeImages, openModal } = useGlobal();
  if (images.length < 1) return null;

  const img = images[0];

  function handleOnclick() {
    if (images.length > 0) {
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
    </div>
  );
}

export default AlbunCard;
