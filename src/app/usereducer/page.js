'use client'
import React, { useReducer, useState } from 'react';


const initialState = {
  todos: []
};

function todoReducer(state, action) {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), text: action.payload }]
      };
    case 'remove':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    default:
      return state;
  }
}

function TodoApp() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch({ type: 'add', payload: input });
      setInput('');
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: 'remove', payload: id });
  };

  return (
    <div className="py-10 px-20 mx-auto max-w-96">
      <h2 className="text-xl font-bold mb-4">To-Do List</h2>
      
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
          className="border rounded p-2 mr-2"
        />
        <button onClick={handleAddTodo} className="bg-blue-500 text-white p-2 rounded">
          Add
        </button>
      </div>

      <ul>
        {state.todos.map(todo => (
          <li key={todo.id} className="flex justify-between items-center mb-2">
            <span>{todo.text}</span>
            <button onClick={() => handleRemoveTodo(todo.id)} className="text-red-500">
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
