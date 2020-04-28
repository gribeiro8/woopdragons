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
          <form action="">
           <div class="input-group">
              <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" required="">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shield"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
          </div>
            <input type="text" name="" id="" placeholder="Senha" />
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Remeber me</label>
              <Link to="/">Esqueceu a senha?</Link>
            </div>

            <button type="submit" className="button">Log In</button>
          </form>
          <p>
            Não tem conta? <Link to="/dashboard">Registre-se agora</Link>
          </p>
        </div>
        <img src={loginDragon} className="form__img"/>
       
      </section>
    </div>
  );
}
