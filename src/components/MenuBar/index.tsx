import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { HiOutlinePhoto, HiOutlineUserGroup } from 'react-icons/hi2';
import { MdOutlineVideoSettings } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import { IoSettingsOutline } from 'react-icons/io5';
import './MenuBar.scss';
import Item from './components/MenuBarItem';
import { useAuth } from '../../contex/AuthContext';

function MenuBar() {
  const { authUser } = useAuth();
  const menuItems = [
    {
      title: 'Home Page',
      linkTo: '/',
      icon: <AiOutlineHome />,
    },
    {
      title: 'Profile',
      linkTo: '/profile/' + authUser?.id,
      icon: <BsPerson />,
    },
    {
      title: 'Friends',
      linkTo: '/friends',
      icon: <HiOutlineUserGroup />,
    },
    {
      title: 'Photos',
      linkTo: '/photos',
      icon: <HiOutlinePhoto />,
    },
    {
      title: 'Videos',
      linkTo: '/videos',
      icon: <MdOutlineVideoSettings />,
    },
    {
      title: 'Settings',
      linkTo: '/settings',
      icon: <IoSettingsOutline />,
    },
  ];

  return (
    <div className="menu cardW">
      {menuItems.map((item) => (
        <Item key={item.title} {...item} />
      ))}
    </div>
  );
}

export default MenuBar;
