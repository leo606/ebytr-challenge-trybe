import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Tasks() {
  const { tasks } = useContext(AppContext);
  return (
    <main>
      <ul>
        {tasks.map((t) => <li>{t}</li>)}
      </ul>
    </main>
  );
}

export default Tasks;
