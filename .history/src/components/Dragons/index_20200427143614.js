import React, { useState, useEffect } from 'react';

import './styles.scss';
import api from '../../services/api';
import CardDragon from '../../components/CardDragon';

export default function Dragons() {
  const [dragons, setDragons] = useState([]);

  useEffect(() => {
    api.get('dragon').then((response) => {
      setDragons(response.data);
    });
  }, []);

  return (
    <div className="dragons">
      {dragons.map((dragon) => (
        <CardDragon idDragon={dragon.id} nameDragon={dragon.name} />
      ))}
    </div>
  );
}
