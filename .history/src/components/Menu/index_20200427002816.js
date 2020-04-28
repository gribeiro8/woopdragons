import React, { useState, useEffect } from 'react';

import './styles.scss';
import logoMini from '../../assets/img/logo-min.svg';
import {FaBell} from 'react-icons/fa'

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
        <FaBell size="18" />
        <p>FOTO</p>
      </div>
    </div>
  );
}
