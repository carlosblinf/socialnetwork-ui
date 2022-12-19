import React from 'react';
import AlbunCard from '../../../AlbunCard';
import './Albuns.scss';
import { postList } from '../../../../store/data';

function Albuns() {
  return (
    <div className="albunImages">
      {postList.map((post) => (
        <AlbunCard images={post.images} key={post.id} />
      ))}
    </div>
  );
}

export default Albuns;
