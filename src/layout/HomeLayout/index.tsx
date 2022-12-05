import { Outlet } from 'react-router-dom';
import Leftbar from '../../components/Leftbar';
import Navbar from '../../components/Navbar';
import Rightbar from '../../components/Rightbar';
import styles from './layout.module.scss';

function HomeLayout() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.main}>
        <Leftbar />
        <div className={styles.content}>
          <Outlet />
        </div>
        <Rightbar />
      </div>
    </div>
  );
}

export default HomeLayout;
