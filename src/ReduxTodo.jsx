import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './reduxTodo.css'

const ReduxTodo = () => {
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      dispatch({ type: 'Add_Todo', text: newTodo });
      setNewTodo('');
    }
  };

  const handleToggleTodo = (id) => {
    dispatch({ type: 'Toggle_Todo', id });
  };

  return (
    <div className='redux_todo'>
      <form>
        <input
          type="text"
          placeholder="Todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="button" onClick={handleAddTodo}>
          Add
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={() => handleToggleTodo(todo.id)}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReduxTodo;
