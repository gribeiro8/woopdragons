import React, { useState, useEffect } from 'react';


import './styles.scss';
import api from '../../services/api';

export default function Dragons() {
  const [dragons, setDragons] = useState([]);

  useEffect(() => {
    api.get('dragon').then((response) => {
      setDragons(response.data);
    });
  }, []);

  return (
    <div key={idDragon}>
      <h1>{nameDragon}</h1>
    </div>
  );
}
