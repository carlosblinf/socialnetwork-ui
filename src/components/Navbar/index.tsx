/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { BsSun, BsSearch } from 'react-icons/bs';
import { TbSocial } from 'react-icons/tb';
import { HiOutlineMoon } from 'react-icons/hi';
import { AiOutlineMessage } from 'react-icons/ai';
import { CgMenuGridO } from 'react-icons/cg';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { useTheme } from '../../contex/ThemeModeContext';
import { useAuth } from '../../contex/AuthContext';
import NavDropdown from './components/NavDropdown';
import { useState } from 'react';
import SearchButton from '../SearchButton/SearchButton';

function Navbar() {
  const { theme, toggle } = useTheme();
  const { authUser } = useAuth();
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="navbar">
      <div className="left">
        <div className="logo">
          <Link to="/">
            <div className="iconLogo">
              <TbSocial />
            </div>
            <h1>SocialNetwork</h1>
          </Link>
        </div>
      </div>
      <div className="right">
        <SearchButton placeholder="Find friends, communities or pages here" />

        <div className="action" onClick={() => toggle()}>
          {theme === 'dark' ? <BsSun /> : <HiOutlineMoon />}
        </div>
        <div className="action">
          <AiOutlineMessage />
          <span>2</span>
        </div>
        <div className="action">
          <IoIosNotificationsOutline />
          <span>9+</span>
        </div>
        <div className="action" onClick={toggleMenu}>
          <CgMenuGridO />
        </div>
        <div className="profileMenu">
          <Link to={'/profile/' + authUser?.id}></Link>
          <img src={authUser?.avatar} alt="user" />
        </div>
      </div>
      <NavDropdown openMenu={openMenu} />
    </div>
  );
}

export default Navbar;
