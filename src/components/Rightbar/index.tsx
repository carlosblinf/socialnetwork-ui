import OnlineFriends, { onlines } from '../OnlineFriends';
import UserRequest, { requests } from '../UserRequests';
import './Rightbar.scss';
import { Link, useNavigate } from 'react-router-dom';

function Rightbar() {
  const navigate = useNavigate();

  const onclick = () => {
    navigate('/friends/3');
  };

  return (
    <div className="rightbar">
      <div className="containerRighbar">
        <div className="section">
          <div className="title">
            <span>Requests</span>
            <span className="request" onClick={onclick}>
              {requests.length}
            </span>
          </div>
          <UserRequest />
        </div>
        <div className="section">
          <div className="title">
            <span>Friends ( Online )</span>
            <span className="onlines">{onlines.length}</span>
          </div>
          <OnlineFriends />
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
