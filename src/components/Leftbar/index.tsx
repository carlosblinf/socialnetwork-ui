import { AiOutlineHome } from 'react-icons/ai';
import { HiOutlinePhoto, HiOutlineUserGroup } from 'react-icons/hi2';
import { MdOutlineVideoSettings } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import { IoSettingsOutline } from 'react-icons/io5';
import styles from './leftbar.module.scss';

function Leftbar() {
  return (
    <div className={styles.leftbar}>
      <div className={styles.container}>
        <div className={styles.user}>
          <img src="user.png" alt="info" />
          <div className={styles.info}>
            <div>Carlos Ernesto</div>
            <span>@carlosblinf</span>
          </div>
        </div>

        <div className={styles.menu}>
          <div className={styles.item}>
            <AiOutlineHome />
            <span>Home Page</span>
          </div>
          <div className={styles.item}>
            <HiOutlineUserGroup />
            <span>Friends</span>
          </div>
          <div className={styles.item}>
            <HiOutlinePhoto />
            <span>Photos</span>
          </div>
          <div className={styles.item}>
            <MdOutlineVideoSettings />
            <span>Videos</span>
          </div>
          <div className={styles.item}>
            <BsPerson />
            <span>Profile</span>
          </div>
          <div className={styles.item}>
            <IoSettingsOutline />
            <span>Settings</span>
          </div>
        </div>

        <div className={styles.others}>
          <div className={styles.title}>
            <span>My Community</span>
          </div>
          <div className={styles.item}>
            <img src="ux.png" alt="group" className="icon" />
            <div className="dir">UI/UX Community</div>
            <span>3</span>
          </div>
          <div className={styles.item}>
            <img src="movil.png" alt="group" className="icon" />
            <div className="dir">Android Lovers</div>
            <span>2</span>
          </div>
          <div className={styles.item}>
            <img src="game.png" alt="group" className="icon" />
            <div className="dir">The Gamers</div>
            <span>3</span>
          </div>
          <div className={styles.item}>
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
