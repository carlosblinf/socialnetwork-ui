import Friends, { onlines } from '../Friends';
import UserRequest from '../UserRequests';
import './Rightbar.scss';

function Rightbar() {
  return (
    <div className="rightbar">
      <div className="containerRighbar">
        <div className="section">
          <div className="title">
            <span>Requests</span>
            <span>2</span>
          </div>
          <UserRequest />
        </div>
        <div className="section">
          <div className="title">
            <span>Friends ( Online )</span>
            <span className="onlines">{onlines.length}</span>
          </div>
          <Friends />
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
