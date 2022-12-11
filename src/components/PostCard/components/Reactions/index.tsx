import React from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsShareFill } from 'react-icons/bs';
import { MdOutlineTextsms } from 'react-icons/md';
import './Reactions.scss';

function Reactions() {
  const liked = true;
  return (
    <div className="reactions">
      <div className="item">
        {liked ? <AiOutlineHeart /> : <AiFillHeart />}
        12 Likes
      </div>
      <div className="item">
        <MdOutlineTextsms />
        Comments
      </div>
      <div className="item">
        <BsShareFill />
        Share
      </div>
    </div>
  );
}

export default Reactions;
