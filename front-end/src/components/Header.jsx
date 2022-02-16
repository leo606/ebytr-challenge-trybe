import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

import '../styles/Header.css';

function Header() {
  const { user } = useContext(AppContext);
  return (
    <header>
      <h1>Ebytr Tasks</h1>
      {user.user && (
      <div>
        User:
        {' '}
        {user.user}
      </div>
      )}
    </header>
  );
}

export default Header;
