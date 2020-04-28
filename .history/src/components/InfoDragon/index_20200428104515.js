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
          <li>{name}</li>
          <li>{type}</li>
          <li>{moment(createdAt).format('HH:mm DD/MM/YYYY ')}</li>
          <li>{histories}</li>
        </ul>
      </div>
       <img src={image || dragonAvatar} alt="" className="adddragon__img" />
    </div>
  );
}
