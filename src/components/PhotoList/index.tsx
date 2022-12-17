import React, { lazy, useEffect } from 'react';
import './PhotoList.scss';
import TabsContainer from '../TabsContainer';
import SearchButton from '../SearchButton/SearchButton';
import { BiDotsHorizontal } from 'react-icons/bi';
import { useParams } from 'react-router-dom';

const Albuns = lazy(() => import('./components/Albuns'));
const Photos = lazy(() => import('./components/Photos'));

const tabs = [
  {
    index: 0,
    label: 'Photos',
    Component: <Photos />,
  },
  {
    index: 1,
    label: 'Albuns',
    Component: <Albuns />,
  },
];

function PhotoList() {
  const { tab } = useParams();
  let tabIndex: number = 0;
  if (tab != undefined && +tab >= 0) {
    tabIndex = parseInt(tab);
  }

  return (
    <div className="containerPhotos">
      <div className="top">
        <h2>Photos</h2>
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

export default PhotoList;
