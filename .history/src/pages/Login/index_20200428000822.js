import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

import logoImg from '../../assets/img/logo.svg';
import loginDragon from '../../assets/img/login-dragon.png';

export default function Login() {
  return (
    <div className="login-container">
      <div className="header">
        <div className="logoContainer">
          <img src={logoImg} alt="" />
        </div>
        <div className="linkContainer">
          <a href="index.html">About</a>
          <a href="index.html">Privacy Policy</a>
          <a href="index.html">Help</a>
          <a href="index.html">Sign Up</a>
        </div>
      </div>

      <section className="form">
        <div className="form__inputs">
          <FormLogin/>
          <p>
            Não tem conta? <Link to="/dashboard">Registre-se agora</Link>
          </p>
        </div>
        <img src={loginDragon} className="form__img" />
      </section>
    </div>
  );
}
