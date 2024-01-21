import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import TodoForm from './TodoForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoItem from './TodoItem';

export default function App() {
  const [todo, settodo] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('todo-list'));
    settodo(storedItems || []);
  }, []);

  useEffect(() => {
    localStorage.setItem('todo-list', JSON.stringify(todo));
  }, [todo]); // Add todo as a dependency

  const handleAdditems = (newtodo) => {
    settodo([...todo, newtodo]);
  };

  return (
    <BrowserRouter>
      
        <Navbar />
        <Routes>
          <Route path="/" element={<TodoForm onAddTodo={handleAdditems} />} />
          <Route
            path="/todos"
            element={<TodoItem key={todo.id} todo={todo} />}
          />
        </Routes>
    </BrowserRouter>
  );
}
