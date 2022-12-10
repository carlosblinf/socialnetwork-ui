import PostList from '../../components/PostList';
import Share from '../../components/Share';
import Stories from '../../components/Stories';
import './Home.scss';

function Home() {
  return (
    <div className="home">
      <div className="containerHome">
        <Stories />
        <Share />
        <PostList />
      </div>
    </div>
  );
}

export default Home;
