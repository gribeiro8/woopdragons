import React, { useState } from 'react';

import './styles.scss';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import loginDragon from '../../assets/img/login-dragon.png';

export default function InfoDragon() {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [histories, setHistories] = useState('');

  const history = useHistory();


  async function handleNewDragon(e) {
    e.preventDefault();

    const data = {
      name,
      type,
      histories,
    };

    try {
      await api.post('incidents', data, {});

      history.push('/profile');
    } catch (err) {
      alert('Erro ao cadastrar caso, tente novamente.');
    }
  }

  return (
    <div className="adddragon">
      <section className="form">
        <div className="form__inputs">
          <form action="" onSubmit={handleNewDragon}>
            <label htmlFor="">Nome</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Dino"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="">Tipo</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Normal"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />

            <label htmlFor="">História</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Da Familia Dinossauro"
              value={histories}
              onChange={(e) => setHistories(e.target.value)}
            />

            <button type="submit" className="button">
              Adicionar
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
