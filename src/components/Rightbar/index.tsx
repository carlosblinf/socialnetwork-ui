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
          <div className={styles.card}>
            <div className={styles.info}>
              <img src="https://randomuser.me/api/portraits/men/78.jpg" alt="user" />
              <span>
                <b>Tyrell Barrows</b> wants to add you to friends
              </span>
            </div>
            <div className={styles.buttons}>
              <button type="button">Accept</button>
              <button type="button">Decline</button>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.info}>
              <img src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
              <span>
                <b>Ana Valerion</b> wants to add you to friends
              </span>
            </div>
            <div className={styles.buttons}>
              <button type="button">Accept</button>
              <button type="button">Decline</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
