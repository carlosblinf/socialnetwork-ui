import React, { useEffect, useState } from 'react';
import PostList from '../../../../components/PostList';
import { useAppSelector } from '../../../../store/store';
import { selectPosts } from '../../../../store/features/post/post.slice';

function HomePostContainer() {
  const posts = useAppSelector(selectPosts);

  return <PostList posts={posts} />;
}

export default HomePostContainer;
