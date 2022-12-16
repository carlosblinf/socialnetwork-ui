import React, { useEffect, Suspense } from 'react';
import Spinner from '../Spinner';

export interface Tab {
  label: string;
  index: number;
  Component: JSX.Element;
}

type TabsProps = {
  tabs: Tab[];
  index: number;
  goToTab: (index: number) => void;
};

function Tabs({ tabs, index, goToTab }: TabsProps) {
  const Panel = tabs[index].Component;

  return (
    <div className="tabs">
      <div className="tablist">
        {tabs.map((tab, i) => (
          <button
            className={index === tab.index ? 'active' : ''}
            onClick={() => goToTab(i)}
            key={i}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>
      <Suspense fallback={<Spinner />}>
        <div className="tabpanel">{Panel}</div>
      </Suspense>
    </div>
  );
}

export default Tabs;
