import React, { useEffect, useState } from 'react';

import Tabs from '../Tabs';
import TabInformation from '../TabInformation';
import TabFriends from '../TabFriends';
import TabPhotos from '../TabPhotos';
import ProfilePostContainer from '../ProfilePostContainer';
import './Info.scss';

const tabs = [
  {
    index: 0,
    label: 'Posts',
    Component: ProfilePostContainer,
  },
  {
    index: 1,
    label: 'Information',
    Component: TabInformation,
  },
  {
    index: 2,
    label: 'Friends',
    Component: TabFriends,
  },
  {
    index: 3,
    label: 'Photos',
    Component: TabPhotos,
  },
];

function Info() {
  const [index, setIndex] = useState(0);

  const goToTab = (slideIndex: number) => {
    setIndex(slideIndex);
  };

  return (
    <div className="tabContainer">
      <Tabs index={index} goToTab={goToTab} tabs={tabs} />
    </div>
  );
}

export default Info;
