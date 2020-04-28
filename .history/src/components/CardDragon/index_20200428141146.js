import React from 'react';

import './styles.scss';
import dragonAvatar from '../../assets/img/dragon-avatar.png';
import { FaEllipsisV } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import api from '../../services/api';

export default function CardDragon({ dragon }) {
  const { id, name, image, type } = dragon;

  async function handleDeleteDragon(id) {
    try {
      await api.delete(`dragon/${id}`);
    } catch (err) {
      alert('Erro ao deletar caso, tente novamente.');
    }
  }

  return (
    <li className="carddragons" key={id}>
      <Link to={`dragao/${id}`}>
        <div className="cardheader">
          <img src={image || dragonAvatar} alt="" className="cardheader__img" />
          <div class="dropdown">
            <FaEllipsisV className="cardheader__icon dropbtn" />
            <div class="dropdown-content">
              <Link to={`dragao/edit/${id}`}>Editar</Link>
              <a onClick={handleDeleteDragon(id)}>Deletar</a>
            </div>
          </div>
        </div>

        <h1 className="cardheader__name">{name}</h1>
        <p className="cardheader__type">{type}</p>
      </Link>
    </li>
  );
}
