import React, { useState, useEffect } from 'react';

import './styles.scss';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import loginDragon from '../../assets/img/login-dragon.png';

export default function Dragons() {
  return (
    <div className="adddragon">
      <section className="form">
        <div className="form__inputs">
          <form action="">
            <label htmlFor="">Nome</label>
            <input type="text" name="" id="" placeholder="E-mail" />
            
            <input type="text" name="" id="" placeholder="Senha" />
            <button type="submit" className="button">
              Adicionar
            </button>
          </form>
        </div>
        <img src={loginDragon} className="form__img" />
      </section>
    </div>
  );
}
