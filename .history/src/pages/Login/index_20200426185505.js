import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

import logoImg from '../../assets/img/logo.svg';

export default function Login() {
  return (
    <div className="login-container">
      <div className="header">
        <div className="logoContainer">
          <img src={logoImg} alt=""  />
        </div>
        <div className="linkContainer">
          <a href="index.html">About</a>
          <a href="index.html">Privacy Policy</a>
          <a href="index.html">Help</a>
          <a href="index.html">Sign Up</a>
        </div>
      </div>

      <section className="form">
        <h1>Faça seu Login</h1>
        <input type="text" name="" id="" placeholder="E-mail" />
        <input type="text" name="" id="" placeholder="Senha" />

        <Link to="/dashboard">Login</Link>
      </section>
    </div>
  );
}
