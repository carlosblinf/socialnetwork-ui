import { Post } from '../../utils/types';
import PostCard from '../PostCard';
import './PostList.scss';

type PostListProps = {
  posts: Post[];
};

function PostList({ posts }: PostListProps) {
  return (
    <div className="posts">
      {posts.length ? (
        [...posts]
          ?.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
          .map((post) => <PostCard post={post} key={post.id} />)
      ) : (
        <span className="noPost card">You don't have any post, please Post it!</span>
      )}
    </div>
  );
}

export default PostList;
