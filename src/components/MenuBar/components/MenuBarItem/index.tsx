import React from 'react';
import { Link } from 'react-router-dom';

type MenuBarItemProps = {
  title: string;
  linkTo: string;
  icon: React.ReactNode;
};

function MenuBarItem(item: MenuBarItemProps) {
  return (
    <Link to={item.linkTo} className="item">
      {item.icon}
      <span>{item.title}</span>
    </Link>
  );
}

export default MenuBarItem;
