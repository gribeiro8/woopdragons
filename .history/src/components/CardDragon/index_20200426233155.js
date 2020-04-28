import React, { useState, useEffect } from 'react';

import './styles.scss';
import logoMini from '../../assets/img/logo-min.svg';

export default function CardDragon({id,name}) {
  return (
    <div key={idDragon}>
      <h1>{name}</h1>
    </div>
  );
}
