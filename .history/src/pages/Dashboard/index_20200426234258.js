import React, { useState, useEffect } from 'react';

import './styles.scss';
import api from '../../services/api';
import Menu from '../../components/Menu';
import CardDragon from '../../components/CardDragon';

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

     


      <hr/>
        {dragons.map((dragon) => (
          <CardDragon idDragon={dragon.id} nameDragon={dragon.name}/>
        ))}
    </div>
  );
}
