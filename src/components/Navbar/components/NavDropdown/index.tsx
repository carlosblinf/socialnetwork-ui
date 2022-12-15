import React from 'react';
import { Link } from 'react-router-dom';
import './NavDropdown.scss';
import { useAuth } from '../../../../contex/AuthContext';

type NavDropDownProps = {
  openMenu: boolean;
};
function NavDropdown({ openMenu }: NavDropDownProps) {
  const { authUser, logout } = useAuth();

  if (!openMenu) return null;

  return (
    <div className="dropdownMenu">
      <Link to="/">Comunity</Link>
      <Link to="/">Friends</Link>
      <Link to="/">Videos</Link>
      <Link to={'/profile/' + authUser?.id}>Profile</Link>
      <Link to="/">Settings</Link>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}

export default NavDropdown;
