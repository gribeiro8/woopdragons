import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

export default function Login() {
  return (
    <div className="login-container">
      <section className="form"></section>
      <h1>Faça seu Login</h1>
      <input type="text" name="" id="" placeholder="E-mail"/>
      <input type="text" name="" id="" placeholder="Senha"/>

      <Link to="/dashboard">
        Login
      </Link>
    </div>
  );
}
