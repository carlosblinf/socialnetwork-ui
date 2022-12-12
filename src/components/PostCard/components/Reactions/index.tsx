import React from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsShareFill } from 'react-icons/bs';
import { MdOutlineTextsms } from 'react-icons/md';
import './Reactions.scss';

type CommentsProps = {
  liked: boolean;
  setLiked: (like: boolean) => void;
  showComments: boolean;
  setShowComments: (show: boolean) => void;
};

function Reactions({
  liked,
  setLiked,
  showComments,
  setShowComments,
}: CommentsProps) {
  // :TODO
  const shared = () => {};

  return (
    <div className="reactions">
      <div className="item" onClick={() => setLiked(!liked)}>
        {liked ? <AiOutlineHeart /> : <AiFillHeart />}
        12 Likes
      </div>
      <div className="item" onClick={() => setShowComments(!showComments)}>
        <MdOutlineTextsms />
        Comments
      </div>
      <div className="item" onClick={() => shared()}>
        <BsShareFill />
        Share
      </div>
    </div>
  );
}

export default Reactions;
