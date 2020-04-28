import React, { useState, useEffect } from 'react';

import './styles.scss';
import logoMini from '../../assets/img/logo-min.svg';


export default function Menu() {
  return (
    <div className="menu">
      <div className="menu__left">
        <ul>
          <li>
            <img src={logoMini} alt="" width="50" />
          </li>
          <li>Dashboard</li>
          <li>Dragons</li>
        </ul>
      </div>

      <div className="menu__right">
        <input type="text" />
        <p>icon</p>
        <p>FOTO</p>
      </div>
    </div>
  );
}
