import React from 'react';

import './styles.scss';
import dragonAvatar from '../../assets/img/dragon-avatar.png';
import { FaEllipsisV } from 'react-icons/fa';


export default function CardDragon({ dragon }) {


  const { id, name, image, type } = dragon;

  return (
    <li className="carddragons" key={id}>
      <div className="carddragons__header">
       
        <img src= {image || dragonAvatar} alt="" className="carddragons__img"/>
        <FaEllipsisV className="carddragons__icon"/>
      </div>
     
        <h1 className="carddragons__name">{name}</h1>
        <p className="carddragons__type">{type}</p>
      

    </li>
  );
}
