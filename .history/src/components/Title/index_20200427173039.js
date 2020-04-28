import React from 'react';

import './styles.scss';
import { FaPlus } from 'react-icons/fa';

export default function Title(props) {
  return (
    <div className="title">
      <h1>{props.children}</h1>
      <div className="title__icon">
        <FaPlus />
      </div>
    </div>
  );
}
