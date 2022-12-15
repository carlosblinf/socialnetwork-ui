import React, { useEffect, useState } from 'react';
import PostList from '../../../../components/PostList';
import { Post } from '../../../../utils/types';
import { postList } from '../../../Home/components/HomePostContainer';
import { useAuth } from '../../../../contex/AuthContext';

function ProfilePostContainer() {
  const { authUser } = useAuth();
  const [posts, setPosts] = useState<Post[]>([]);

  const profilePostList = postList.filter((post) => post.id == authUser?.id);

  useEffect(() => {
    setPosts(postList);
  }, [posts]);

  return <PostList posts={posts} />;
}

export default ProfilePostContainer;
