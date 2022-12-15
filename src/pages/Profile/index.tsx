import ProfileInfo from './components/ProfileInfo';
import './profile.scss';
import { useAuth } from '../../contex/AuthContext';
import { useParams } from 'react-router-dom';
import Info from './components/Info';

function Profile() {
  const { id } = useParams();
  const { authUser } = useAuth();
  const findUser = (id: string) => null;

  return (
    <div className="profile">
      <div className="imagesProfile">
        <img src={authUser?.coverImage} className="cover" alt="cover" />
      </div>
      <ProfileInfo user={authUser} />
      <div className="postProfile">
        <Info />
      </div>
    </div>
  );
}

export default Profile;
