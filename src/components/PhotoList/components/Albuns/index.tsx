import React from 'react';
import AlbunCard from '../../../AlbunCard';
import { postList } from '../../../../pages/Home/components/HomePostContainer';
import './Albuns.scss';

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
