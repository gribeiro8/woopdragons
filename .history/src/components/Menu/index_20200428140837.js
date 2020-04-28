import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';
import logoMini from '../../assets/img/logo-min.svg';
import avatar from '../../assets/img/avatar.png';
import { FiBell } from 'react-icons/fi';

export default function Menu() {

  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <div className="menu">
      <div className="menu__left">
        <ul>
          <li>
            <Link to="/dashboard">
              <img src={logoMini} alt="" width="50" />
            </Link>
          </li>
          <li className="active">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>Dragons</li>
        </ul>
      </div>

      <div className="menu__right">
        <FiBell size="28" color="#a4a7b1" />

        <div class="dropdown">
          <img src={avatar} alt="" className="dropbtn" />
          <div class="dropdown-content ">
            <a onClick={handleLogout}>Sair</a>
          </div>
        </div>
      </div>
    </div>
  );
}
