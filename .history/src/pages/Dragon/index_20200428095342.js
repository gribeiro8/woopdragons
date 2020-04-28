import React, { useState, useEffect } from 'react';

import './styles.scss';
import api from '../../services/api';
import Menu from '../../components/Menu';
import Title from '../../components/Title';
import InfoDragon from '../../components/InfoDragon';

export default function Dragon(props) {
  console.log(props.match.params);
  
  const [dragon, setDragon] = useState([]);
  const { id } = props.match.params;

  useEffect(() => {
    api.get(`dragon/${id}`).then((response) => {
      console.log(response.data);
      
      setDragon(response.data);
    });
  }, []);

  return (
    <div className="container-dashboard">
      <Menu />
      <Title icon="false">Dragão - {dragon} </Title>
      <InfoDragon />
    </div>
  );
}
