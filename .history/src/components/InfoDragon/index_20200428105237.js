import React, { useState } from 'react';

import './styles.scss';
import dragonAvatar from '../../assets/img/dragon-avatar.png';

import moment from 'moment';

export default function InfoDragon(props) {
  const { id, name, createdAt, type, histories, image } = props.dragon;

  return (
    <div className="adddragon">
      <div>
        <ul>
          <li className="adddragon__title">{name}</li>
          <li className="adddragon__type">{type}</li>
          <li className="adddragon__date"><b>Criado:</b> {moment(createdAt).format('HH:mm DD/MM/YYYY ')}</li>
          <li className="adddragon__history"><b>Historia:</b> {histories}</li>
        </ul>
      </div>
       <img src={image || dragonAvatar} alt="" className="adddragon__img" />
    </div>
  );
}
