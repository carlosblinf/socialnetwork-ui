import React, { useState } from 'react';
import { Post } from '../../utils/types';
import Comments from '../Comments';
import PostHeader from './components/PostHeader';
import PostImages from './components/PostImages';
import Reactions from './components/Reactions';
import './PostCard.scss';

export type PostProps = {
  post: Post;
};

function PostCard({ post }: PostProps) {
  const [showComments, setShowComments] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <div className="post card">
      <PostHeader author={post.author} date={post.date} />

      <p className="postText">{post.text}</p>

      <PostImages images={post.images} />

      <Reactions
        liked={liked}
        setLiked={setLiked}
        showComments={showComments}
        setShowComments={setShowComments}
      />

      {showComments && <Comments />}
    </div>
  );
}

export default PostCard;
