import React from 'react';
import { string } from 'prop-types';

function TaskStatusControls({ status }) {
  function handleStatus({ target }) {
    console.log(target.name);
  }
  return (
    <div>
      {status !== 'pendente' && <button type="button" onClick={handleStatus} name="pendente">pendente</button> }
      {status !== 'em andamento' && <button type="button" onClick={handleStatus} name="em andamento">em andamento</button> }
      {status !== 'feito' && <button type="button" onClick={handleStatus} name="feito">feito</button> }
    </div>
  );
}

TaskStatusControls.propTypes = {
  status: string.isRequired,
};

export default TaskStatusControls;
