import React from 'react';

import './styles.scss';
import logoMini from '../../assets/img/logo-min.svg';

export default function CardDragon({ dragon }) {


  const { id, name, image } = dragon;

  return (
    <li className="carddragons" key={id}>
      <div className="carddragons__header">
        <img src={image} alt=""/>

        <h1>{name}</h1>
      </div>
     
      

    </li>
  );
}
