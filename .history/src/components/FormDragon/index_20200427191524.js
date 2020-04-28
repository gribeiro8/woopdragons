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
      <ul>
        {dragons.map((dragon) => (
          <CardDragon dragon={dragon}  />
        ))}
      </ul>
    </div>
  );
}
