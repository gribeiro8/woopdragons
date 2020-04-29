import React from 'react';
import './styles.scss';

import logoImg from '../../assets/img/logo.svg';

export default function LoginHeader() {
  return (
    <div className="login-header">
      <div className="login-header__logo">
        <img src={logoImg} alt="" />
      </div>
      <div className="login-header__container">
        <a href="">Privacy Policy</a>
        <a href="">About</a>
      </div>
    </div>
  );
}
