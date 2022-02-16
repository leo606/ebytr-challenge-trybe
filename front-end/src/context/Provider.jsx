import React, { useState, useMemo } from 'react';
import { node } from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {
  const [user, setUser] = useState('context test');
  const [tasks, setTasks] = useState('context test');
  const [sorting, setSorting] = useState('date');

  const contextValue = useMemo(() => ({
    user, setUser, tasks, setTasks, sorting, setSorting,
  }), [user, tasks, sorting]);

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: node.isRequired,
};

export default Provider;
