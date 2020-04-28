import React, { useState, useEffect } from 'react';

import './styles.scss';
import api from '../../services/api';
import CardDragon from '../../components/CardDragon';

export default function Dragons() {
  const [dragons, setDragons] = useState([]);

  function orderDragon(dragons) {
    dragons.sort((a, b) => (a.name > b.name ? 1 : -1));
    return dragons;
  }

  useEffect(() => {
    api.get('dragon').then((response) => {
      setDragons(orderDragon(response.data));
    });
  }, []);

  return (
    <div className="dragons">
      <ul>
        {[]
          .concat(dragons)
          .sort((a, b) => a.name > b.name)
          .map((dragon) => (
            <CardDragon dragon={dragon} />
          ))}
      </ul>
    </div>
  );
}
