import React from 'react';

import './styles.scss';
import logoMini from '../../assets/img/logo-min.svg';

export default function CardDragon({ dragon }) {


  

  return (
    <li className="carddragons" key={idDragon}>
      <div>
        <img src={} alt=""/>
      </div>
      <strong>CASO:</strong>
      <p>{nameDragon}</p>

      <strong>DESCRIÇÃO:</strong>
      <p></p>

      <strong>VALOR:</strong>
      <p></p>
    </li>
  );
}
