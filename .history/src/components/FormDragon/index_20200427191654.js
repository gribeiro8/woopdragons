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
            <input type="text" name="" id="" placeholder="E-mail" />
            <input type="text" name="" id="" placeholder="Senha" />
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Remeber me</label>
              <Link to="/">Esqueceu a senha?</Link>
            </div>

            <button type="submit" className="button">Log In</button>
          </form>
          <p>
            Não tem conta? <Link to="/dashboard">Registre-se agora</Link>
          </p>
        </div>
        <img src={loginDragon}className="form__img"/>
       
      </section>
    </div>
  );
}
