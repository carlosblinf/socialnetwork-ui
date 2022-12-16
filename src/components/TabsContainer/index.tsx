import React, { useEffect, useState } from 'react';
import Tabs, { Tab } from '../Tabs';
import './TabsContainer.scss';

type TabsContainerProps = {
  tabs: Tab[];
  className?: string;
  tabIndex?: number;
};

function TabsContainer({ tabs, className, tabIndex = 0 }: TabsContainerProps) {
  const [index, setIndex] = useState(tabIndex);

  const goToTab = (slideIndex: number) => {
    setIndex(slideIndex);
  };
  useEffect(() => {
    setIndex(tabIndex);
  }, [tabIndex]);

  return (
    <div className={`tabContainer ${className}`}>
      <Tabs index={index} goToTab={goToTab} tabs={tabs} />
    </div>
  );
}

export default TabsContainer;
