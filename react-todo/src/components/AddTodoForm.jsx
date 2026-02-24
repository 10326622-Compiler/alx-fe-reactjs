import { useState } from 'react';

// ─── AddTodoForm ───────────────────────────────────────────────────────────────
// A controlled form component that collects new todo text and
// calls the onAdd callback provided by the parent (TodoList).
// Keeps its own local `inputValue` state — no todo logic lives here.
const AddTodoForm = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = inputValue.trim();
    if (!trimmed) return;   // ignore empty submissions
    onAdd(trimmed);         // hand the text up to TodoList
    setInputValue('');      // reset field after submission
  };

  return (
    <form onSubmit={handleSubmit} className='add-todo-form'>
      <input
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='Add a new todo...'
        className='todo-input'
        aria-label='New todo input'
      />
      <button type='submit' className='add-btn' disabled={!inputValue.trim()}>
        Add Todo
      </button>
    </form>
  );
};

export default AddTodoForm;