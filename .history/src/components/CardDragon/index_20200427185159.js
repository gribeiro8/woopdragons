import React from 'react';

import './styles.scss';
import dragonAvatar from '../../assets/img/dragon-avatar.png';
import { FaEllipsisV } from 'react-icons/fa';


export default function CardDragon({ dragon }) {


  const { id, name, image, type } = dragon;

  return (
    <li className="carddragons" key={id}>
      <div className="cardheader">
       
        <img src= {image || dragonAvatar} alt="" className="cardheader__img"/>
        <FaEllipsisV className="cardheader__icon"/>
      </div>
     
        <h1 className="cardheader__name">{name}</h1>
        <p className="cardheader__type">{type}</p>
      

    </li>
  );
}
