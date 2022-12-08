import { Link } from 'react-router-dom';
import styles from './register.module.scss';

function Register() {
  return (
    <div className={styles.register}>
      <div className={styles.card}>
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
          <form>
            <input type="text" name="firstname" placeholder="First Name" />
            <input type="text" name="lastname" placeholder="Last Name" />
            <input type="email" name="email" placeholder="Email" />
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <select defaultValue="0" className={styles.gender}>
              <option value="0">Choose Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <button type="submit">Register</button>
          </form>
          <span>
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Register;
