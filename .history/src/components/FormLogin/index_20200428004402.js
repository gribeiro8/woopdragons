import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.scss';

export default function FormLogin() {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      if (email == 'a@a.com' && senha == '123') {
        localStorage.setItem('contaId', id);
        localStorage.setItem('contaName', response.data.name);

        history.push('/dashboard');
      }
    } catch (err) {
      alert('Falha no login, tente novamente.');
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        name=""
        id=""
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
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
  );
}
