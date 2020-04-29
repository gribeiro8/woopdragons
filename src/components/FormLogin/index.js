import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.scss';
import loginDragon from '../../assets/img/login-dragon.png';

export default function FormLogin() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const history = useHistory();

  function HandleError(text) {
    alert(text);
  }

  async function handleLogin(e) {
    e.preventDefault();

    try {
      if (email === 'a@a.com' && senha === '123') {
        localStorage.setItem('accountId', 1000);
        localStorage.setItem('contaName', 'Gabriel');
        localStorage.setItem('contaImg', 'avatar.png');

        history.push('/dashboard');
      } else {
        HandleError('Falha no login, tente novamente.');
      }
    } catch (err) {
      HandleError('Falha no login, tente novamente.');
    }
  }

  return (
    <section className="login-form">
      <div className="login-form__inputs">
        <form onSubmit={handleLogin}>
          <h2>FAÇA SEU LOGIN</h2>
          <input
            type="text"
            name=""
            id=""
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <Link to="/">Esqueceu a senha?</Link>
          <button type="submit" className="button">
            Log In
          </button>
        </form>
        <p>
          Não tem conta? <Link to="/dashboard">Registre-se agora</Link>
        </p>
      </div>
      <img src={loginDragon} className="login-form__img" alt="dragon" />
    </section>
  );
}
