import React, { useState, useContext } from 'react';

import AppContext from '../context/AppContext';

function SortingForm() {
  const [formData, setFormData] = useState({ sort: '' });
  const { setSorting } = useContext(AppContext);

  function handleChange({ target: { name, value } }) {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }
  async function submitSorting(event) {
    event.preventDefault();
    const { sort } = formData;
    setSorting(sort);
  }

  return (
    <form onSubmit={submitSorting} className="sorting-form">
      <div>
        <label htmlFor="sort-name">
          Ordem Alfabética
          <input type="radio" name="sort" value="name" id="sort-name" onChange={handleChange} />
        </label>
        <label htmlFor="sort-date">
          Data
          <input type="radio" name="sort" value="date" id="sort-date" onChange={handleChange} />
        </label>
        <label htmlFor="sort-status">
          Status
          <input type="radio" name="sort" value="status" id="sort-status" onChange={handleChange} />
        </label>
      </div>
      <button type="submit">Ordenar</button>
    </form>
  );
}

export default SortingForm;