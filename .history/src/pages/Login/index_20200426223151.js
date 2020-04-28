import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

import logoImg from '../../assets/img/logo.svg';

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
          <form action="">
            <input type="text" name="" id="" placeholder="E-mail" />
            <input type="text" name="" id="" placeholder="Senha" />
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Remeber me</label>
              <Link to="/">Esqueceu a senha?</Link>
            </div>

            <button type="submit">Log In</button>
          </form>
          <p>
            Não tem conta? <Link to="/dashboard">Registre-se agora</Link>
          </p>
        </div>
        <div className="form__img">
        </div>
      </section>
    </div>
  );
}
