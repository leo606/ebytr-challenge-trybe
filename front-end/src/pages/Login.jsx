import React, { useState, useContext } from 'react';
import axios from 'axios';
import AppContext from '../context/AppContext';

const LOGIN_ENDPOINT = 'http://localhost:3001/login';

function Login() {
  const [formData, setFormData] = useState({
    user: '',
  });
  const { setUser, setTasks } = useContext(AppContext);

  function handleChange({ target: { name, value } }) {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }

  function postLogin() {
    try {
      const res = axios.post(LOGIN_ENDPOINT, formData);
      setUser({ id: res.data.id, user: res.data.user });
      setTasks(res.data.tasks);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <form onSubmit={postLogin}>
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
        disabled={!formData.length}
      >
        Entrar
      </button>
    </form>
  );
}

export default Login;
