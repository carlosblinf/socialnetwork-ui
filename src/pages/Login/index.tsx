import { Link } from 'react-router-dom';
import styles from './login.module.scss';
import LoginForm from '../../components/LoginForm/index';

function Login() {
  return (
    <div className={styles.login}>
      <div className={styles.loginCard}>
        <div className={`${styles.left} ${styles.flex}`}>
          <h1>Hello World.</h1>
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
          <LoginForm />
          <span>
            Don't yo have an account? <Link to="/register">Register</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
