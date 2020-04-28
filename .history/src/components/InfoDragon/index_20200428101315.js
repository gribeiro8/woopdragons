import React, { useState } from 'react';

import './styles.scss';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import loginDragon from '../../assets/img/login-dragon.png';

export default function InfoDragon(props) {
 

  const {id, name, createdAt, type, histories ,image} = props.dragon;

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
    <div>
      <h2></h2>
    </div>
    </div>
  );
}
