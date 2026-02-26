import { useState } from 'react';
import AddTodoForm from './AddTodoForm';

// ─── Initial demo todos ────────────────────────────────────────────────────────
// Static array used to seed the component state on first render.
// Each todo has: id (unique), text (display), completed (boolean).
const INITIAL_TODOS = [
  { id: 1, text: 'Learn React fundamentals', completed: true },
  { id: 2, text: 'Understand React hooks', completed: false },
  { id: 3, text: 'Write tests with Jest', completed: false },
];

// ─── TodoList ──────────────────────────────────────────────────────────────────
// Root component that owns all todo state and exposes three operations:
//   addTodo    → appends a new todo to the list
//   toggleTodo → flips the completed flag of a single todo by id
//   deleteTodo → removes a todo from the list by id
const TodoList = () => {
  const [todos, setTodos] = useState(INITIAL_TODOS);

  // ── Add ──────────────────────────────────────────────────────────────────────
  // Creates a new todo object and appends it to state.
  // Uses Date.now() for a unique id (fine for a demo; use uuid in production).
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  // ── Toggle ────────────────────────────────────────────────────────────────────
  // Maps over all todos; flips `completed` only on the matching id.
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // ── Delete ────────────────────────────────────────────────────────────────────
  // Filters out the todo whose id matches.
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // ── Derived stats ─────────────────────────────────────────────────────────────
  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <div className='todo-container'>
      <div className='todo-header'>
        <h1>📝 Todo List</h1>
        <span className='todo-stats'>
          {completedCount} / {todos.length} completed
        </span>
      </div>

      {/* AddTodoForm receives addTodo as the onAdd callback */}
      <AddTodoForm onAdd={addTodo} />

      {todos.length === 0 ? (
        <p className='empty-state'>No todos yet — add one above!</p>
      ) : (
        <ul className='todo-list'>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`todo-item ${todo.completed ? 'completed' : ''}`}
            >
              {/* Clicking the text/checkbox toggles completion */}
              <span
                className='todo-text'
                onClick={() => toggleTodo(todo.id)}
                role='button'
                aria-label={`Toggle: ${todo.text}`}
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && toggleTodo(todo.id)}
              >
                <span className='todo-checkbox'>
                  {todo.completed ? '✅' : '⬜'}
                </span>
                {todo.text}
              </span>

              {/* Delete button removes the todo */}
              <button
                className='delete-btn'
                onClick={() => deleteTodo(todo.id)}
                aria-label={`Delete: ${todo.text}`}
              >
                🗑️
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;