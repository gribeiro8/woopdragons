import React, { useState } from 'react';

import './styles.scss';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import loginDragon from '../../assets/img/login-dragon.png';
import Moment from 'moment';

export default function InfoDragon(props) {
  const { id, name, createdAt, type, histories, image } = props.dragon;

  return (
    <div className="adddragon">
      <div>
        <ul>
          <li>{name}</li>
          <li>{type}</li>
          <li>{moment(createdAt).format('YYYY-MM-DD HH:mm:ss')}</li>
          <li>{histories}</li>
        </ul>
      </div>
    </div>
  );
}
