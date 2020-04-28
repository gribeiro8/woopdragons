import React, { useState, useEffect } from 'react';

import './styles.scss';
import api from '../../services/api';
import Menu from '../../components/Menu';

export default function Login() {
  const [dragons, setDragons] = useState([]);

  useEffect(() => {
    api.get('dragon').then((response) => {
      setDragons(response.data);
    });
  }, []);

  return (
    <div className="container-dashboard">

      <Menu/>
      <div>
        <h1>Dragons</h1>
        <div>
          <p>icon +</p>
        </div>
      </div>


      <hr/>
        {dragons.map((dragon) => (
          
        ))}
    </div>
  );
}
