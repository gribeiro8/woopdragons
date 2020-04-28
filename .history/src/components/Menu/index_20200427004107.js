import React, { useState, useEffect } from 'react';

import './styles.scss';
import logoMini from '../../assets/img/logo-min.svg';
import avatar from '../../assets/img/avatar.png';
import { FiBell } from 'react-icons/fi';

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
        <FiBell size="28" color="#a4a7b1"/>
        <img src={avatar} alt="" />
      </div>
    </div>
  );
}
