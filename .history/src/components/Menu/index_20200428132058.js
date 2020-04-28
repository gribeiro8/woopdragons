import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
        <div class="dropdown-content">
          <Link to={`dragao/edit/${id}`}>Editar</Link>
          <Link to={`dragao/delete/${id}`}>Deletar</Link>
        </div>
        <img src={avatar} alt="" />
      </div>
    </div>
  );
}
