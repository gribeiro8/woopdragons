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
    <div>
      {dragons.map((dragon) => (
        <CardDragon idDragon={dragon.id} nameDragon={dragon.name} />
      ))}
    </div>
  );
}
