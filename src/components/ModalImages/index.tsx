import React from 'react';
import { Image } from '../../utils/types';
import ImageSlider from '../ImageSlider';
import './ModalImages.scss';

interface ModalImagesProps {
  isOpen: boolean;
  images: Image[];
  closeModal: () => void;
}

function ModalImages({ isOpen, images, closeModal }: ModalImagesProps) {
  if (!isOpen) return null;

  if (!images || images.length < 1) return null;

  return (
    <div id="myModal" className="myModal">
      <span className="closeModal" onClick={closeModal}>
        &times;
      </span>
      <ImageSlider images={images} />
    </div>
  );
}

export default ModalImages;
