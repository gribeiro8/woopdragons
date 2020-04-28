import React, {useState, useEffect} from 'react';

import './styles.css';
import api from '../../services/api';

export default function Login() {
  const [ dragons, setDragons] = useState([]);

  useEffect(() => {
   api.get('dragon')
   .then(response => {
     
   })
  }, [])



  return (
    <div>
      <h1>Dragons</h1>

      <div>
        <h2>Nome Dragao</h2>
      </div>
    </div>
  );
}
