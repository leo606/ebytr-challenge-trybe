import React, { useContext } from 'react';
import { string } from 'prop-types';
import axios from 'axios';

import AppContext from '../context/AppContext';

const PUT_STATUS_ENDPOINT = 'http://localhost:3001/task';

function TaskStatusControls({ status, taskId }) {
  const { setTasks } = useContext(AppContext);

  async function putStatus({ target: { name: newStatus } }) {
    try {
      await axios.put(`${PUT_STATUS_ENDPOINT}/${taskId}`, { status: newStatus });

      setTasks((prevState) => (
        prevState.map((task) => (task.id === taskId ? { ...task, status: newStatus } : task))
      ));
    } catch (e) {
      console.log(e);
    }
  }

  async function deleteTask() {
    try {
      await axios.delete(`${PUT_STATUS_ENDPOINT}/${taskId}`);

      setTasks((prevState) => prevState.filter((task) => task.id !== taskId));
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="task-status-control">
      {status === 'pendente' && <button type="button" onClick={putStatus} name="em andamento">em andamento</button> }
      {status === 'em andamento' && <button type="button" onClick={putStatus} name="feito">feito</button> }
      <button type="button" onClick={deleteTask} name="delete">remover</button>
    </div>
  );
}

TaskStatusControls.propTypes = {
  status: string.isRequired,
  taskId: string.isRequired,
};

export default TaskStatusControls;
