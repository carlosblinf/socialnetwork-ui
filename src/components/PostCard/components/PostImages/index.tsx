import React from 'react';
import { useGlobal } from '../../../../contex/GlobalContext';
import { Image } from '../../../../utils/types';

export type PostImagesProps = {
  images?: Image[];
};

function PostImages({ images }: PostImagesProps) {
  const { changeImages, openModal } = useGlobal();

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
      return true;
    }
    return false;
  }

  if (!images) return null;

  function handleOnclick(array: Image[]) {
    changeImages(array);
    openModal();
  }

  return (
    <div className={`images ${calcWidth(images.length || 0)}`}>
      {images.map((img, index) =>
        activeGallery(images.length, index) ? (
          <div
            onClick={() => handleOnclick(images)}
            className="image"
            key={img.id}
            style={{
              background: `url(${img.url}) center / cover`,
            }}
          >
            <span>+ {images.length - index - 1}</span>
          </div>
        ) : (
          <div
            className="image"
            key={img.id}
            style={{
              background: `url(${img.url}) center / cover`,
            }}
          />
        )
      )}
    </div>
  );
}

export default PostImages;
