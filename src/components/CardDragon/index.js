import React from 'react';

import './styles.scss';
import dragonAvatar from '../../assets/img/dragon-avatar.png';
import { FaEllipsisV } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

export default function CardDragon({ dragon }) {
  const { id, name, image, type } = dragon;
  const history = useHistory();

  async function handleDeleteDragon(e, id) {
    try {
      e.preventDefault();
      console.log('Deletando o id ' + id);

      await api.delete(`dragon/${id}`);
      alert('OK.');
      window.location.reload(false);
    } catch (err) {
      alert('Erro ao deletar caso, tente novamente.');
      console.log(err);
    }
  }

  return (
    <li className="carddragons">
      <div className="cardheader">
        <Link to={`dragon/${id}`}>
          <img src={image || dragonAvatar} alt="" className="cardheader__img" />
        </Link>
        <div className="dropdown">
          <FaEllipsisV className="cardheader__icon dropbtn" />
          <div className="dropdown-content">
            <Link to={`dragon/edit/${id}`}>Editar</Link>
            <a href="/#" onClick={(e) => handleDeleteDragon(e, id)}>
              Deletar
            </a>
          </div>
        </div>
      </div>
      <Link to={`dragon/${id}`}>
        <h1 className="cardheader__name">{name}</h1>
        <p className="cardheader__type">{type}</p>
      </Link>
    </li>
  );
}
