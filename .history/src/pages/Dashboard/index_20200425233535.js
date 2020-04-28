import React, {useState, useEffect} from 'react';

import './styles.css';
import api from '../../services/api';

export default function Login() {
  const [ dragons, setDragons] = useState([]);

  useEffect(() => {
   api.get('dragon')
   .then(response => {
     setDragons(response.data);
   })
  }, [])



  return (
    <div>
      <h1>Dragons</h1>

      <ul>
        {dragons.map(dragon => (
          <li key={dragon.id}>{dragon.name}</li>
        ))}
      </ul>
    </div>
  );
}
