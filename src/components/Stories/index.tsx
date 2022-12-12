import { useAuth } from '../../contex/AuthContext';
import './Stories.scss';

const stories = [
  {
    id: 1,
    user: {
      id: 2,
      firstName: 'Tyrell',
      lastName: 'Barrows',
      avatar: 'https://randomuser.me/api/portraits/men/78.jpg',
    },
    image: 'https://images.pexels.com/photos/6033681/pexels-photo-6033681.jpeg',
  },
  {
    id: 2,
    user: {
      id: 3,
      firstName: 'Alison',
      lastName: 'Reichert',
      avatar: 'https://randomuser.me/api/portraits/women/79.jpg',
    },
    image: 'https://images.pexels.com/photos/6087668/pexels-photo-6087668.jpeg',
  },
  {
    id: 3,
    user: {
      id: 4,
      firstName: 'Miles',
      lastName: 'Cummerata',
      avatar: 'https://randomuser.me/api/portraits/men/50.jpg',
    },
    image: 'https://images.pexels.com/photos/6061857/pexels-photo-6061857.jpeg',
  },
  {
    id: 4,
    user: {
      id: 5,
      firstName: 'Ana',
      lastName: 'Valerion',
      avatar: 'https://randomuser.me/api/portraits/women/59.jpg',
    },
    image: 'https://images.pexels.com/photos/6061698/pexels-photo-6061698.jpeg',
  },
  {
    id: 5,
    user: {
      id: 6,
      firstName: 'Oleta Fernandez',
      lastName: 'Abbott asdasd',
      avatar: 'https://randomuser.me/api/portraits/women/18.jpg',
    },
    image: 'https://images.pexels.com/photos/6062009/pexels-photo-6062009.jpeg',
  },
];
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
