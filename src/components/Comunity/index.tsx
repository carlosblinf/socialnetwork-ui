import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Item from './components/ComunityItem';
import './Comunity.scss';

const comunityItems = [
  {
    id: uuidv4(),
    name: 'UI/UX Community',
    imageLogo: 'ux.png',
    notification: 3,
  },
  {
    id: uuidv4(),
    name: 'Android Lovers',
    imageLogo: 'movil.png',
    notification: 2,
  },
  {
    id: uuidv4(),
    name: 'The Gamers',
    imageLogo: 'game.png',
    notification: 3,
  },
  {
    id: uuidv4(),
    name: 'Two Connections',
    imageLogo: 'shuffle.png',
    notification: 1,
  },
];

function Comunity() {
  return (
    <div className="comunity cardW">
      <div className="title">
        <span>My Community</span>
      </div>
      {comunityItems.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Comunity;
