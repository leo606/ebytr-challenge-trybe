import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';

const LOGIN_ENDPOINT = 'http://localhost:3001/login';

function Login() {
  const [formData, setFormData] = useState({ user: '' });
  const [warning, setWarning] = useState(false);
  const { setUser, setTasks } = useContext(AppContext);
  const navigate = useNavigate();

  function handleChange({ target: { name, value } }) {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }

  async function postLogin(event) {
    event.preventDefault();
    try {
      const res = await axios.post(LOGIN_ENDPOINT, formData);
      setUser({ id: res.data.id, user: res.data.user });
      setTasks(res.data.tasks);
      navigate('/tasks');
    } catch (e) {
      setWarning(true);
    }
  }
  return (
    <form onSubmit={postLogin}>
      <h1>login</h1>
      <label htmlFor="user-input">
        <input
          type="text"
          name="user"
          id="user-input"
          placeholder="username"
          value={formData.user}
          onChange={handleChange}
        />
      </label>
      <button
        type="submit"
        disabled={!formData.user.length}
      >
        Entrar
      </button>
      {warning && <span>Tente novamente</span>}
    </form>
  );
}

export default Login;
