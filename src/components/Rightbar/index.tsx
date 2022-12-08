import Friends, { onlines } from '../Friends';
import UserRequest from '../UserRequests';
import styles from './rightbar.module.scss';

function Rightbar() {
  return (
    <div className={styles.rightbar}>
      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.title}>
            <span>Requests</span>
            <span>2</span>
          </div>
          <UserRequest />
        </div>
        <div className={styles.section}>
          <div className={styles.title}>
            <span>Friends ( Online )</span>
            <span className={styles.onlines}>{onlines.length}</span>
          </div>
          <Friends />
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
