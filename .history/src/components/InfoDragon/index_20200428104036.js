import React, { useState } from 'react';

import './styles.scss';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import loginDragon from '../../assets/img/login-dragon.png';
import moment from 'moment';

export default function InfoDragon(props) {
  const { id, name, createdAt, type, histories, image } = props.dragon;

  return (
    <div className="adddragon">
      <div>
        <ul>
          <li>{name}</li>
          <li>{type}</li>
          <li>{moment(createdAt).format('HH:mm DD/MM/YYYY ')}</li>
          <li>{histories}</li>
        </ul>
      </div>
    </div>
  );
}
