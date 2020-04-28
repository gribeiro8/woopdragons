import React from 'react';

import './styles.scss';
import dragonAvatar from '../../assets/img/dragon-avatar.png';
import { FaEllipsisV } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function CardDragon({ dragon }) {
  const { id, name, image, type } = dragon;

  return (
    <li className="carddragons" key={id}>
      <div className="cardheader">
        <img src={image || dragonAvatar} alt="" className="cardheader__img" />
        <div class="dropdown">
          <FaEllipsisV className="cardheader__icon dropbtn" />
          <div class="dropdown-content">
            <Link to="/dragon/edit">Editar</Link>
            <Link to="/dragon/delete">Deletar</Link>
          </div>
        </div>
      </div>

      <h1 className="cardheader__name">{name}</h1>
      <p className="cardheader__type">{type}</p>
    </li>
  );
}
