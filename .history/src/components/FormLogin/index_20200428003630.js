import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.scss';


export default function FormLogin() {

  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/dashboard');
    } catch (err) {
      alert('Falha no login, tente novamente.');
    }
  }




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
