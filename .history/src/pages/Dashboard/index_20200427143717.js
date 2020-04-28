import React, { useState, useEffect } from 'react';

import './styles.scss';
import api from '../../services/api';
import Menu from '../../components/Menu';
import Title from '../../components/Title';
import Dragons from '../../components/Dragons';

export default function Login() {
  return (
    <div className="container-dashboard">
      <Menu />
      <Title>Dashboard</Title>
      <Dragons />
    </div>
  );
}
