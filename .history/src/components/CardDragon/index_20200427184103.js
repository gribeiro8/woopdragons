import React from 'react';

import './styles.scss';
import logoMini from '../../assets/img/dragon';
import { FaEllipsisV } from 'react-icons/fa';


export default function CardDragon({ dragon }) {


  const { id, name, image, type } = dragon;

  return (
    <li className="carddragons" key={id}>
      <div className="carddragons__header">
        <img src={image} alt=""/>
        <FaEllipsisV/>
      </div>
     
        <h1>{name}</h1>
        <p>{type}</p>
      

    </li>
  );
}
