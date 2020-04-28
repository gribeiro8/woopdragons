import React from 'react';

import './styles.scss';
import Menu from '../../components/Menu';
import Title from '../../components/Title';
import Dragons from '../../components/Dragons';

export default function Login() {
  return (
    <div className="container-dashboard">
      <Menu />
      <Title>Seu time</Title>
      <Dragons />
    </div>
  );
}
