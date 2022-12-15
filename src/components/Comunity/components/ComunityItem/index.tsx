import React from 'react';

type PropsItem = {
  id: string;
  name: string;
  imageLogo: string;
  notification: number;
};

function ComunityItem(item: PropsItem) {
  return (
    <div className="item">
      <img src={item.imageLogo} alt="group" className="icon" />
      <div className="dir">{item.name}</div>
      <span>{item.notification}</span>
    </div>
  );
}

export default ComunityItem;
