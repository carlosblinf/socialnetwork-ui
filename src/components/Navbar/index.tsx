import { BsSun, BsSearch } from 'react-icons/bs';
import { BiNetworkChart } from 'react-icons/bi';
import { TbSocial } from 'react-icons/tb';
import { HiOutlineMoon } from 'react-icons/hi';
import { AiOutlineMessage, AiOutlineHome } from 'react-icons/ai';
import { CgMenuGridO } from 'react-icons/cg';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';
import styles from './navbar.module.scss';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Link to="/">
            <div className={styles.iconLogo}>
              {/* <AiOutlineHome /> */}
              {/* <BiNetworkChart /> */}
              <TbSocial/>
            </div>
            <span>SocialNetwork</span>
          </Link>
        </div>
        <h1>Home Page</h1>
      </div>
      <div className={styles.right}>
        <div className={styles.search}>
          <BsSearch />
          <input type="text" name="search" placeholder="Find friends, communities or pages here" />
        </div>
        <div className={styles.action}>
          <HiOutlineMoon />
        </div>
        <div className={styles.action}>
          <AiOutlineMessage />
          <span>2</span>
        </div>
        <div className={styles.action}>
          <IoIosNotificationsOutline />
          <span>9+</span>
        </div>
        <div className={styles.action}>
          <CgMenuGridO />
        </div>
        <div className={styles.profile}>
          <img src="user.jpg" alt="user" />
          {/* <span>Carlos Ernesto</span> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
