import { AiOutlineHome } from 'react-icons/ai';
import { HiOutlinePhoto, HiOutlineUserGroup } from 'react-icons/hi2';
import { MdOutlineVideoSettings } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import { IoSettingsOutline } from 'react-icons/io5';
import './Leftbar.scss';
import { useAuth } from '../../contex/AuthContext';

function Leftbar() {
  const { authUser } = useAuth();

  return (
    <div className="leftbar">
      <div className="containerLeftbar">
        <div className="user cardW">
          <img src={authUser?.avatar} alt="info" />
          <div className="info">
            <div>{authUser?.firstName}</div>
            <span>@{authUser?.username}</span>
          </div>
        </div>

        <div className="menu cardW">
          <div className="item">
            <AiOutlineHome />
            <span>Home Page</span>
          </div>
          <div className="item">
            <HiOutlineUserGroup />
            <span>Friends</span>
          </div>
          <div className="item">
            <HiOutlinePhoto />
            <span>Photos</span>
          </div>
          <div className="item">
            <MdOutlineVideoSettings />
            <span>Videos</span>
          </div>
          <div className="item">
            <BsPerson />
            <span>Profile</span>
          </div>
          <div className="item">
            <IoSettingsOutline />
            <span>Settings</span>
          </div>
        </div>

        <div className="others cardW">
          <div className="title">
            <span>My Community</span>
          </div>
          <div className="item">
            <img src="ux.png" alt="group" className="icon" />
            <div className="dir">UI/UX Community</div>
            <span>3</span>
          </div>
          <div className="item">
            <img src="movil.png" alt="group" className="icon" />
            <div className="dir">Android Lovers</div>
            <span>2</span>
          </div>
          <div className="item">
            <img src="game.png" alt="group" className="icon" />
            <div className="dir">The Gamers</div>
            <span>3</span>
          </div>
          <div className="item">
            <img src="shuffle.png" alt="group" className="icon" />
            <div className="dir">Two Connections</div>
            <span>1</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leftbar;
