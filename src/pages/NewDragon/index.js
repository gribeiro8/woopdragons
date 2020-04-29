import React from 'react';

import './styles.scss';
import Menu from '../../components/Menu';
import Title from '../../components/Title';
import FormDragon from '../../components/FormDragon';

export default function Login(props) {
  const idDragon = props.match.params.id;

  console.log(idDragon);
  const actionType = (idDragon ? 'edit' : 'add');
  

  return (
    <div className="container-dashboard">
      <Menu />
      <Title icon="false">{(actionType==='add' ? 'Adicionar Dragão' : 'Editar Dragão' )}</Title>
      <FormDragon actionType={actionType} idDragon={idDragon}/>
    </div>
  );
}
