import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';
import LoginHeader from '../../components/LoginHeader';
import FormLogin from '../../components/FormLogin';

import logoImg from '../../assets/img/logo.svg';

export default function Login() {
  return (
    <div className="login-container">
      <LoginHeader />
      <FormLogin />
    </div>
  );
}
