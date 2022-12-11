import React from 'react';
import { Post } from '../../utils/types';
import PostHeader from './components/PostHeader';
import PostImages from './components/PostImages';
import Reactions from './components/Reactions';
import './PostCard.scss';

export type PostProps = {
  post: Post;
};

function PostCard({ post }: PostProps) {
  return (
    <div className="post">
      <PostHeader author={post.author} date={post.date} />

      <p className="postText">{post.text}</p>

      <PostImages images={post.images} />

      <Reactions />
    </div>
  );
}

export default PostCard;
