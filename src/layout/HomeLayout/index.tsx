import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Leftbar from '../../components/Leftbar';
import Navbar from '../../components/Navbar';
import Rightbar from '../../components/Rightbar';
import Spinner from '../../components/Spinner';
import './layout.scss';

function HomeLayout() {
  return (
    <div className="containerLayout">
      <Navbar />
      <div className="main">
        <Leftbar />
        <div className="content">
          <Suspense fallback={<Spinner />}>
            <Outlet />
          </Suspense>
        </div>
        <Rightbar />
      </div>
    </div>
  );
}

export default HomeLayout;
