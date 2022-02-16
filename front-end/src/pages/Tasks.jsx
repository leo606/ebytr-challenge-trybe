/* eslint-disable */
import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

import Task from '../components/Task';
import NewTaskForm from '../components/NewTaskForm';
import SortingForm from '../components/SortingForm';
import '../styles/Tasks.css';
import sortingCallbacks from '../helpers/sortingCallbacks';

function Tasks() {
  const { tasks, sorting } = useContext(AppContext);

  return (
    <main className="tasks">
      <h1>tasks</h1>
      <SortingForm />
      <NewTaskForm />
      <div className="tasks-list">
        {
          tasks
            .sort(sortingCallbacks[sorting])
            .map((task) => <Task key={task.id} task={task} />)
        }
      </div>
    </main>
  );
}

export default Tasks;
