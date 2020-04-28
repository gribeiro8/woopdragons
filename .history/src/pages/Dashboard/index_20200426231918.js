import React, { useState, useEffect } from 'react';

import './styles.scss';
import api from '../../services/api';
import logoMini from '../../assets/img/logo-min.svg';

export default function Login() {
  const [dragons, setDragons] = useState([]);

  useEffect(() => {
    api.get('dragon').then((response) => {
      setDragons(response.data);
    });
  }, []);

  return (
    <div className="container-dashboard">
      <div>
        <div>
          <ul>
            <li><img src={logoMini} alt="" width="50"/></li>
            <li>Dashboard</li>
            <li>Dragons</li>
          </ul>
        </div>

        <div>
          <input type="text"/>
          <p>icon</p>
          <p>FOTO</p>
        </div>
      </div>

      <h1>Dragons</h1>

      <ul>
        {dragons.map((dragon) => (
          <li key={dragon.id}>{dragon.name}</li>
        ))}
      </ul>
    </div>
  );
}
