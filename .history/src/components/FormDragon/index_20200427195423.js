import React, { useState } from 'react';

import './styles.scss';
import api from '../../services/api';
import { Link, useHistory } from 'react-router-dom';
import loginDragon from '../../assets/img/login-dragon.png';

export default function Dragons() {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [histories, setHistories] = useState('');

  const history = useHistory();

  const dragonId = localStorage.getItem('dragonId');

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      name,
      type,
      histories,
    };

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId,
        },
      });

      history.push('/profile');
    } catch (err) {
      alert('Erro ao cadastrar caso, tente novamente.');
    }
  }

  return (
    <div className="adddragon">
      <section className="form">
        <div className="form__inputs">
          <form action="">
            <label htmlFor="">Nome</label>
            <input type="text" name="" id="" placeholder="Dino" />

            <label htmlFor="">Tipo</label>
            <input type="text" name="" id="" placeholder="Normal" />

            <label htmlFor="">História</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Da Familia Dinossauro"
            />

            <button type="submit" className="button">
              Adicionar
            </button>
          </form>
        </div>
        <img src={loginDragon} className="form__img" />
      </section>
    </div>
  );
}
