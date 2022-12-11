import React, { useState } from 'react';
import { Image } from '../../utils/types';
import './ImageSlider.scss';

export type ImageSliderProps = {
  images: Image[] | undefined;
};
function ImageSlider({ images }: ImageSliderProps) {
  const [index, setIndex] = useState(0);
  if (!images) return null;

  const slidesStyle = {
    width: '100%',
    borderRadius: '10px',
    background: `url(${images[index].url}) center / cover`,
  };

  const isFirstSlide = index === 0;
  const isLastSlide = index === images.length - 1;
  const goToPrev = () => {
    const nextIndex = isFirstSlide ? images.length - 1 : index - 1;
    setIndex(nextIndex);
  };
  const goToNext = () => {
    const nextIndex = isLastSlide ? 0 : index + 1;
    setIndex(nextIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setIndex(slideIndex);
  };

  return (
    <div className="containerSlider">
      <div className="mySlides" style={slidesStyle}>
        <a className="prev" onClick={() => goToPrev()}>
          &#10094;
        </a>
        <a className="next" onClick={() => goToNext()}>
          &#10095;
        </a>
      </div>

      <div className="row">
        {images.map((slide, i) => (
          <div className="column" key={slide.id}>
            <img
              className={`demo cursor ${index === i && 'active'}`}
              src={slide.url}
              onClick={() => goToSlide(i)}
              alt="The Woods"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
