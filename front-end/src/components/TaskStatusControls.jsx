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

      setTasks([]);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      {status !== 'pendente' && <button type="button" onClick={putStatus} name="pendente">pendente</button> }
      {status !== 'em andamento' && <button type="button" onClick={putStatus} name="em andamento">em andamento</button> }
      {status !== 'feito' && <button type="button" onClick={putStatus} name="feito">feito</button> }
    </div>
  );
}

TaskStatusControls.propTypes = {
  status: string.isRequired,
  taskId: string.isRequired,
};

export default TaskStatusControls;
