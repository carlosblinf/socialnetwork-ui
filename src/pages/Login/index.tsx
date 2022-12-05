import { Link } from 'react-router-dom';
import styles from './login.module.scss';

function Login() {
  return (
    <div className={styles.login}>
      <div className={styles.card}>
        <div className={`${styles.left} ${styles.flex}`}>
          <h1>Social Network.</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea laborum
            harum accusantium nobis eos a error, blanditiis iusto, temporibus
            dolorem nemo ducimus earum beatae doloribus enim ad dolorum, eum
            alias.
          </p>
          <span>Don't yo have an account?</span>
          <Link to="/register">
            <button type="button">Register</button>
          </Link>
        </div>
        <div className={`${styles.right} ${styles.flex}`}>
          <h1>Login</h1>
          <form>
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
          <span>
            Don't yo have an account? <Link to="/register">Register</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
