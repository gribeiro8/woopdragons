import React from 'react';

import './styles.scss';
import dragonAvatar from '../../assets/img/dragon-avatar.png';
import { FaEllipsisV } from 'react-icons/fa';

export default function CardDragon({ dragon }) {
  const { id, name, image, type } = dragon;

  return (
    <li className="carddragons" key={id}>
      <div className="cardheader">
        <img src={image || dragonAvatar} alt="" className="cardheader__img" />
        <FaEllipsisV className="cardheader__icon dropbtn" />
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>

      <h1 className="cardheader__name">{name}</h1>
      <p className="cardheader__type">{type}</p>
    </li>
  );
}
