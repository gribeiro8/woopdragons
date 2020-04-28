import React from 'react';

import './styles.scss';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
