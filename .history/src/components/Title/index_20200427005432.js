import React from 'react';

import './styles.scss';
import { FaPlus } from 'react-icons/fa';

export default function Title() {
  return (
    <div className="title">
      <h1>Dragons</h1>
      <div>
        <FaPlus className="title__icon"/>
      </div>
    </div>
  );
}
