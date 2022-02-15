import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Tasks() {
  const { user, tasks } = useContext(AppContext);

  return (
    <>
      <h1>tasks</h1>
      <h1>{user.user}</h1>
      <ul>
        {tasks.map((t) => <li>{t.tasks}</li>)}
      </ul>
    </>
  );
}

export default Tasks;
