import React from 'react';

import './styles.scss';
import logoMini from '../../assets/img/logo-min.svg';

export default function CardDragon({idDragon,nameDragon}) {
  return (
    <div key={idDragon}>
      <h1>{nameDragon}</h1>
    </div>
  );
}
