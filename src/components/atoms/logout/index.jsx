import React from 'react';

import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';

const Logout = () => {
  const history = useHistory();

  const handleLogout = () => {
    Cookies.remove('token');
    history.push('/');
  };

  return (
    <div>
      <h2>Logout</h2>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;