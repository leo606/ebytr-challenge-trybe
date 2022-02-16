import React, { useState, useContext } from 'react';
import axios from 'axios';

import AppContext from '../context/AppContext';

const TASK_ENDPOINT = 'http://localhost:3001/task';

function NewTaskForm() {
  const [formData, setFormData] = useState({ task: '' });
  const [warning, setWarning] = useState(false);
  const { user, setTasks } = useContext(AppContext);

  function handleChange({ target: { name, value } }) {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }
  async function submitTask(event) {
    event.preventDefault();
    try {
      const data = { ...formData, user: user.user };
      const res = await axios.post(TASK_ENDPOINT, data);
      setTasks((prevState) => [...prevState, res.data]);
    } catch (e) {
      setWarning(true);
    }
  }
  return (
    <form onSubmit={submitTask} className="new-task-form">
      <textarea name="task" id="task-textarea" cols="30" rows="10" onChange={handleChange} />
      <button type="submit">Salvar</button>
      {warning && <span>Tente novamente</span>}
    </form>
  );
}

export default NewTaskForm;
