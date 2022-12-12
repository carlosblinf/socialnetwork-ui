import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import './LoginForm.scss';
import { useAuth } from '../../contex/AuthContext';
import { useNavigate } from 'react-router-dom';
import { UserCredential } from '../../utils/types';

function LoginForm() {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserCredential>({
    resolver: yupResolver(validationSchema),
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data: UserCredential) => {
    login(data);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="formGroup">
        <input
          type="text"
          {...register('username')}
          placeholder="Username"
          className={`form-control ${errors.username ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback">{errors.username?.message}</div>
      </div>
      <div className="formGroup">
        <input
          type="password"
          {...register('password')}
          placeholder="Password"
          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback">{errors.password?.message}</div>
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default LoginForm;
