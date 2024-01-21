import React, { useState } from 'react';

export default function TodoForm({ onAddTodo }) {
  const [Newtodo, setNewtodo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Newtodo.trim()) {
      onAddTodo({ id: Date.now(), text: Newtodo });
      setNewtodo('');
      alert("task saved!")
    }
  };

  return (
    <div>
      <div className="container-md" style={{ position: "absolute",
     top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",}}>
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Add a todo
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={Newtodo}
          onChange={(event) => setNewtodo(event.target.value)}
        />
        <button className="btn btn-primary my-3" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}
