import React, { useEffect, useState } from 'react';
import PostList from '../../../../components/PostList';
import { useAuth } from '../../../../contex/AuthContext';
import { useAppSelector } from '../../../../store/store';
import { selectPosts } from '../../../../store/features/post/post.slice';
import Share from '../../../../components/Share';

function ProfilePostContainer() {
  const { authUser } = useAuth();
  const posts = useAppSelector(selectPosts);

  const profilePostList = posts?.filter(
    (post) => post.author.id == authUser.id
  );

  return (
    <>
      <Share />
      <PostList posts={profilePostList} />;
    </>
  );
}

export default ProfilePostContainer;
