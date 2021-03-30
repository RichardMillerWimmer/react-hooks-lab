import React, { useState } from 'react';
import AddTodo from './AddTodo';
import List from './List';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(item) {
    const newList = [...todos, item];
    setTodos(newList);
  }

  return (
    <div className="App">
      <AddTodo addTodo={addTodo} />
      <List todos={todos} />
    </div>
  );
}

export default App;
