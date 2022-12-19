import React, { lazy } from 'react';

import Tabs from '../../../../components/Tabs';
const PhotoList = lazy(() => import('../../../../components/PhotoList'));
const ProfilePostContainer = lazy(() => import('../ProfilePostContainer'));
const TabInformation = lazy(() => import('../TabInformation'));

import FriendList from '../../../../components/FriendList';
import TabsContainer from '../../../../components/TabsContainer';

const tabs = [
  {
    index: 0,
    label: 'Posts',
    Component: <ProfilePostContainer />,
  },
  {
    index: 1,
    label: 'Information',
    Component: <TabInformation />,
  },
  {
    index: 2,
    label: 'Friends',
    Component: <FriendList />,
  },
  {
    index: 3,
    label: 'Photos',
    Component: <PhotoList />,
  },
];

function Info() {
  return <TabsContainer tabs={tabs} />;
}

export default Info;
