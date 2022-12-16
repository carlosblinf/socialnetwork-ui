import React, { lazy, useEffect } from 'react';
import './FriendList.scss';
import TabsContainer from '../TabsContainer';
import SearchButton from '../SearchButton/SearchButton';
import { BiDotsHorizontal } from 'react-icons/bi';
import { useParams } from 'react-router-dom';

const AllFriends = lazy(() => import('./components/AllFriends'));
const Followers = lazy(() => import('./components/Followers'));
const Recently = lazy(() => import('./components/Recently'));
const FriendRequest = lazy(() => import('./components/FriendRequest'));

const tabs = [
  {
    index: 0,
    label: 'All Friends',
    Component: <AllFriends />,
  },
  {
    index: 1,
    label: 'Added recently',
    Component: <Recently />,
  },
  {
    index: 2,
    label: 'Followers',
    Component: <Followers />,
  },
  {
    index: 3,
    label: 'Requests',
    Component: <FriendRequest />,
  },
];

function FriendList() {
  const { tab } = useParams();
  let tabIndex: number = 0;
  if (tab != undefined && +tab >= 0) {
    tabIndex = parseInt(tab);
  }

  return (
    <div className="containerFriends">
      <div className="top">
        <h2>Friends</h2>
        <SearchButton placeholder="Search" />
        <button>
          <BiDotsHorizontal />
        </button>
      </div>
      <div className="bottom">
        <TabsContainer tabs={tabs} tabIndex={tabIndex} />
      </div>
    </div>
  );
}

export default FriendList;
