import React from 'react';

import './styles.scss';
import Menu from '../../components/Menu';
import Title from '../../components/Title';
import FormDragon from '../../components/FormDragon';

export default function Login() {
  return (
    <div className="container-dashboard">
      <Menu />
      <Title icon="false">Adicionar Dragão</Title>
      <FormDragon/>
    </div>
  );
}
