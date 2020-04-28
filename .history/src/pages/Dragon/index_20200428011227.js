import React, { useState, useEffect } from 'react';

import './styles.scss';
import api from '../../services/api';
import Menu from '../../components/Menu';
import Title from '../../components/Title';
import Dragons from '../../components/Dragons';
import FormDragon from '../../components/FormDragon';

export default function Dragon() {
  return (
    <div className="container-dashboard">
      <Menu />
      <Title icon="false">Dragão - </Title>
      <InfoDragon/>
    </div>
  );
}
