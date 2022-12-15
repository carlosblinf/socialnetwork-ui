import ProfileInfo from './components/ProfileInfo';
import ProfilePostContainer from './components/ProfilePostContainer';
import './profile.scss';
import { useAuth } from '../../contex/AuthContext';
import { useParams } from 'react-router-dom';

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
        <ProfilePostContainer />
      </div>
    </div>
  );
}

export default Profile;
