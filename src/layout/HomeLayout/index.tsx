import { Outlet } from 'react-router-dom';
import Leftbar from '../../components/Leftbar';
import Navbar from '../../components/Navbar';
import Rightbar from '../../components/Rightbar';

function HomeLayout() {
  return (
    <div>
      <Navbar />
      <div>
        <Leftbar />
        <Outlet />
        <Rightbar />
      </div>
    </div>
  );
}

export default HomeLayout;
