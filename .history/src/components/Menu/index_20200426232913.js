import React, { useState, useEffect } from 'react';

import './styles.scss';
import logoMini from '../../assets/img/logo-min.svg';

export default function Menu() {
  return (
    <div>
      <div>
        <ul>
          <li>
            <img src={logoMini} alt="" width="50" />
          </li>
          <li>Dashboard</li>
          <li>Dragons</li>
        </ul>
      </div>

      <div>
        <input type="text" />
        <p>icon</p>
        <p>FOTO</p>
      </div>
    </div>
  );
}
