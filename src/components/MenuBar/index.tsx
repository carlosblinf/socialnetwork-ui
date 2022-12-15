import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { HiOutlinePhoto, HiOutlineUserGroup } from 'react-icons/hi2';
import { MdOutlineVideoSettings } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import { IoSettingsOutline } from 'react-icons/io5';
import './MenuBar.scss';
import Item from './components/MenuBarItem';

const menuItems = [
  {
    title: 'Home Page',
    linkTo: '/',
    icon: <AiOutlineHome />,
  },
  {
    title: 'Friends',
    linkTo: '/',
    icon: <HiOutlineUserGroup />,
  },
  {
    title: 'Photos',
    linkTo: '/',
    icon: <HiOutlinePhoto />,
  },
  {
    title: 'Videos',
    linkTo: '/',
    icon: <MdOutlineVideoSettings />,
  },
  {
    title: 'Profile',
    linkTo: '/',
    icon: <BsPerson />,
  },
  {
    title: 'Settings',
    linkTo: '/',
    icon: <IoSettingsOutline />,
  },
];

function MenuBar() {
  return (
    <div className="menu cardW">
      {menuItems.map((item) => (
        <Item key={item.title} {...item} />
      ))}
    </div>
  );
}

export default MenuBar;
