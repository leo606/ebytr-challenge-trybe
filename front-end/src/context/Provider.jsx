import React, { useState, useMemo } from 'react';
import { node } from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {
  const [state1, setState1] = useState('context test');

  const contextValue = useMemo(() => ({ state1, setState1 }), [state1]);

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
