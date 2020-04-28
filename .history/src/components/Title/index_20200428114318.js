import React from 'react';

import './styles.scss';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Title(props) {
  return (
    <div className="title">
      <h1>{props.children}</h1>
      {props.icon ? (
        ''
      ) : (
        <div>
          <Link to="/dragao/add">
            <div className="title__icon">
              <FaPlus />
            </div>
          </Link>
          <Link to="/dragao/add">
            <div className="title__icon">
              <FaPlus />
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}
