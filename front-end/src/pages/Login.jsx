import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Login() {
  const { state1 } = useContext(AppContext);
  return (
    <div>{state1}</div>
  );
}

export default Login;
