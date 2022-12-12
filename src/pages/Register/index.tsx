import { Link } from 'react-router-dom';
import RegisterForm from '../../components/RegisterForm';
import styles from './register.module.scss';

function Register() {
  return (
    <div className={styles.register}>
      <div className={styles.registerCard}>
        <div className={`${styles.left} ${styles.flex}`}>
          <h1>Social Network.</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea laborum
            harum accusantium nobis eos a error, blanditiis iusto, temporibus
            dolorem nemo ducimus earum beatae doloribus enim ad dolorum, eum
            alias.
          </p>
          <span>Already have an account?</span>
          <Link to="/login">
            <button type="button">Login</button>
          </Link>
        </div>
        <div className={`${styles.right} ${styles.flex}`}>
          <h1>Register</h1>
          <RegisterForm />
          <span>
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Register;
