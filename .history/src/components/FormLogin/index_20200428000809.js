import React from 'react';

import './styles.scss';


export default function FormLogin() {
  return (
    <form action="">
      <input type="text" name="" id="" placeholder="E-mail" />
      <input type="text" name="" id="" placeholder="Senha" />
      <Link to="/">Esqueceu a senha?</Link>
      <button type="submit" className="button">
        Log In
      </button>
    </form>
  );
}
