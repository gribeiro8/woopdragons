import React, { useState, useEffect } from 'react';

import './styles.scss';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import familyDragon from '../../assets/img/family-dragon.jpg';

export default function Dragons({ actionType, idDragon }) {
  const [id, setId] = useState(idDragon);
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [histories, setHistories] = useState('');

  const history = useHistory();

  //const dragonId = localStorage.getItem('dragonId');

  async function handleNewDragon(e) {
    e.preventDefault();

    const data = {
      name,
      type,
      histories,
    };

    try {
      if (actionType === 'edit') {
        await api.put(`dragon/${id}`, data, {});
      } else {
        await api.post('dragon', data, {});
      }
      history.push('/dashboard');
    } catch (err) {
      console.log(err);
      alert('Erro ao cadastrar caso, tente novamente.');
    }
  }

  useEffect(() => {
    if (actionType === 'edit') {
      api.get(`dragon/${id}`).then((response) => {
        console.log(response.data);
        const dragon = response.data;
        setName(dragon.name);
        setType(dragon.type);
        setHistories(dragon.histories);
        //setDragon(response.data);
      });
    }
  }, []);

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
             {(actionType==='add' ? 'Adicionar' : 'Editar' )}
            </button>
          </form>
        </div>
        <img src={familyDragon} className="form__img" alt="dragon" />
      </section>
    </div>
  );
}
