import React from 'react';
import { Image } from '../../../../utils/types';

export type PostImagesProps = {
  images?: Image[];
};

function PostImages({ images }: PostImagesProps) {
  const calcWidth = (lenght: number) => {
    if (lenght === 1) {
      return 'fullWith';
    }
    if (lenght === 3) {
      return 'resize';
    }
    if (lenght > 4) {
      return 'gallery';
    }
    return '';
  };

  function activeGallery(length: number, index: number) {
    if (length > 4 && index === 3) {
      return <span>+ {length - index - 1}</span>;
    }
    return null;
  }

  if (!images) return null;

  return (
    <div className={`images ${calcWidth(images.length || 0)}`}>
      {images.map((img, index) => (
        <div
          className="image"
          key={img.id}
          style={{
            background: `url(${img.url}) center / cover`,
          }}
        >
          {activeGallery(images?.length || 0, index)}
        </div>
      ))}
    </div>
  );
}

export default PostImages;
