import React, { useState } from 'react';
import axios from 'axios';

const LOGIN_ENDPOINT = 'http://localhost:3001/login';

function Login() {
  const [formData, setFormData] = useState({
    user: '',
  });

  function handleChange({ target: { name, value } }) {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }

  function postLogin() {
    try {
      const res = axios.post(LOGIN_ENDPOINT, formData);
      console.log(res.data);
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
      <button type="submit">Entrar</button>
    </form>
  );
}

export default Login;
