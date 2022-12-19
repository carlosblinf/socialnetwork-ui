import { useAuth } from '../../contex/AuthContext';
import { stories } from '../../store/data';
import './Stories.scss';

function Stories() {
  const { authUser } = useAuth();

  return (
    <div className="stoires">
      <div
        className="story"
        style={{
          background: "url('/pexels-register.jpg') center / cover",
          opacity: 0.9,
        }}
      >
        <img src={authUser?.avatar} alt="user" />
        <div className="add">
          <span>
            <button type="button">+</button>
          </span>
          <span>Add Story</span>
        </div>
      </div>
      {stories?.map((story) => (
        <div
          key={story.id}
          className="story"
          style={{
            background: `radial-gradient(
              rgba(13, 14, 14, 0.2),
              rgba(13, 14, 14, 0.2)
            ), url(${story.image}) center / cover`,
          }}
        >
          <img src={story.user.avatar} alt="story" />
          <div>{`${story.user.firstName} ${story.user.lastName}`}</div>
        </div>
      ))}
      {stories.length > 3 && <span className="next">&#10095;</span>}
    </div>
  );
}

export default Stories;
