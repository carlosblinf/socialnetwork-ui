import { Outlet } from 'react-router-dom';
import Leftbar from '../../components/Leftbar';
import Navbar from '../../components/Navbar';
import Rightbar from '../../components/Rightbar';
import './layout.scss';

function HomeLayout() {
  return (
    <div className="containerLayout">
      <Navbar />
      <div className="main">
        <Leftbar />
        <div className="content">
          <Outlet />
        </div>
        <Rightbar />
      </div>
    </div>
  );
}

export default HomeLayout;
