import React from 'react';

import './styles.scss';
import logoMini from '../../assets/img/logo-min.svg';

export default function CardDragon({ dragon }) {


  const { id, name, image } = dragon;

  return (
    <li className="carddragons" key={id}>
      <div>
        <img src={image} alt=""/>
      </div>
      <strong>CASO:</strong>
      <p>{name}</p>

      <strong>DESCRIÇÃO:</strong>
      <p></p>

      <strong>VALOR:</strong>
      <p></p>
    </li>
  );
}
