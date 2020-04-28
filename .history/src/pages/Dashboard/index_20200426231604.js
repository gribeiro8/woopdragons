import React, { useState, useEffect } from 'react';

import './styles.scss';
import api from '../../services/api';

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
            <li></li>
            <li>Dashboard</li>
            <li>Dragons</li>
          </ul>
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
