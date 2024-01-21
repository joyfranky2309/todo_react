import React from 'react';

export default function TodoItem({ todo }) {
  return (
    <div className='mx-3'>
      <h1>Todo Items:</h1>
      <ul>
        {todo.map((item) => (
          <li key={item.id}>{item.text} </li>
        ))}
      </ul>
    </div>
  );
}
