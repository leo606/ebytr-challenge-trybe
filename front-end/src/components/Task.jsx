import React from 'react';
import { shape, string } from 'prop-types';

import TaskStatusControls from './TaskStatusControls';

function Task({ task }) {
  return (
    <div className="task-container" key={task.id}>
      <div className="task-text">
        <p>{task.task}</p>
        <span>{new Date(task.date).toLocaleDateString('pt-br')}</span>
        <span>{task.status}</span>
      </div>
      <TaskStatusControls status={task.status} taskId={task.id} />
    </div>
  );
}

Task.propTypes = {
  task: shape({
    task: string,
    date: string,
  }).isRequired,
};

export default Task;
