import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

import Task from '../components/Task';
import NewTaskForm from '../components/NewTaskForm';

function Tasks() {
  const { user, tasks } = useContext(AppContext);

  return (
    <>
      <h1>tasks</h1>
      <h1>{user.user}</h1>
      <NewTaskForm />
      {tasks.map((task) => <Task key={task.id} task={task} />)}
    </>
  );
}

export default Tasks;
