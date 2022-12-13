import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import './RegisterForm.scss';
import { useAuth } from '../../contex/AuthContext';
import { useNavigate } from 'react-router-dom';
import { NewUserFrom } from '../../utils/types';
import { toast } from '../ToastManager';

function RegisterForm() {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Firstname is required'),
    lastName: Yup.string().required('Lastname is required'),
    username: Yup.string()
      .required('Username is required')
      .min(6, 'Username must be at least 6 characters')
      .max(20, 'Username must not exceed 20 characters'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
    gender: Yup.string()
      .required('Gender is required')
      .min(2, 'Gender is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewUserFrom>({
    resolver: yupResolver(validationSchema),
  });

  const { registerUser } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data: NewUserFrom) => {
    try {
      registerUser(data);
      navigate('/');
    } catch (error) {
      if (error instanceof Error) {
        toast.show({
          id: 'error-register',
          title: 'Error Register',
          content: error.message,
          duration: 3000,
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="formGroup">
        <input
          type="text"
          {...register('firstName')}
          placeholder="First Name"
          className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback">{errors.firstName?.message}</div>
      </div>
      <div className="formGroup">
        <input
          type="text"
          {...register('lastName')}
          placeholder="Last Name"
          className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback">{errors.lastName?.message}</div>
      </div>
      <div className="formGroup">
        <input
          type="email"
          {...register('email')}
          placeholder="Email"
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback">{errors.email?.message}</div>
      </div>
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
      <div className="formGroup">
        <input
          type="password"
          {...register('confirmPassword')}
          placeholder="Confirm password"
          className={`form-control ${
            errors.confirmPassword ? 'is-invalid' : ''
          }`}
        />
        <div className="invalid-feedback">
          {errors.confirmPassword?.message}
        </div>
      </div>
      <div className="formGroup">
        <select defaultValue="0" {...register('gender')}>
          <option value="0">Choose Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <div className="invalid-feedback">{errors.gender?.message}</div>
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;
