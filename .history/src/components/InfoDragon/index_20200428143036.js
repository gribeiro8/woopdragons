import React from 'react';

import './styles.scss';
import dragonAvatar from '../../assets/img/dragon-avatar.png';

import moment from 'moment';

export default function InfoDragon(props) {
  const { name, createdAt, type, histories, image } = props.dragon;

  return (
    <div className="infodragon">
      <div>
        <ul>
          <li className="infodragon__title">{name}</li>
          <li className="infodragon__type">{type}</li>
          <li className="infodragon__date"><b>Criado:</b> {moment(createdAt).format('HH:mm DD/MM/YYYY ')}</li>
          <li className="infodragon__history"><b>Historia:</b> {histories}</li>
        </ul>
      </div>
       <img src={image || dragonAvatar} alt="" className="infodragon__img" />
    </div>
  );
}
