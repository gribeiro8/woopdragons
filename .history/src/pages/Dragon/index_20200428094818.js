import React, { useState, useEffect } from 'react';

import './styles.scss';
import api from '../../services/api';
import Menu from '../../components/Menu';
import Title from '../../components/Title';
import InfoDragon from '../../components/InfoDragon';

export default function Dragon() {
  const [dragons, setDragons] = useState([]);

  useEffect(() => {
    api.get('dragon').then((response) => {
      setDragons(response.data);
    });
  }, []);

  return (
    <div className="container-dashboard">
      <Menu />
      <Title icon="false">Dragão - </Title>
      <InfoDragon />
    </div>
  );
}
