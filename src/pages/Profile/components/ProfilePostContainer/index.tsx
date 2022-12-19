import React, { useEffect, useState } from 'react';
import PostList from '../../../../components/PostList';
import { useAuth } from '../../../../contex/AuthContext';
import { useAppSelector } from '../../../../store/store';
import { selectPosts } from '../../../../store/features/post/post.slice';

function ProfilePostContainer() {
  const { authUser } = useAuth();
  const posts = useAppSelector(selectPosts);

  const profilePostList = posts?.filter(
    (post) => post.author.id == authUser.id
  );

  return <PostList posts={profilePostList} />;
}

export default ProfilePostContainer;
