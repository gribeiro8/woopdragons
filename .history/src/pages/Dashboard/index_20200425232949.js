import React from 'react';

import './styles.css';
import api from '../../services/api';

export default function Login() {

  useEffect(() => {
   api.get('dragon')
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
