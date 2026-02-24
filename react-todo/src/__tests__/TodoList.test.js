import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

// ─── TodoList Test Suite ───────────────────────────────────────────────────────
// Tests cover all four required scenarios:
//   1. Initial render — demo todos appear on screen
//   2. Adding a todo — new item appears after form submission
//   3. Toggling a todo — completed state flips on click
//   4. Deleting a todo — item removed from the list
//
// Each test renders a FRESH component (render() is called inside each it()).
// React Testing Library's cleanup runs automatically between tests.

describe('TodoList Component', () => {

  // ── Test 1: Initial Render ────────────────────────────────────────────────────
  // Verifies that the component mounts and shows the three seeded demo todos.
  // Uses getByText which throws if the element is NOT found — acts as assertion.
  it('renders the initial todo items', () => {
    render(<TodoList />);

    // All three INITIAL_TODOS should be visible in the document
    expect(screen.getByText('Learn React fundamentals')).toBeInTheDocument();
    expect(screen.getByText('Understand React hooks')).toBeInTheDocument();
    expect(screen.getByText('Write tests with Jest')).toBeInTheDocument();
  });

  // ── Test 2: Initial Completed State ──────────────────────────────────────────
  // "Learn React fundamentals" starts as completed — verify its CSS class.
  it('renders the first todo as completed', () => {
    render(<TodoList />);

    // The <li> wrapping the first todo should have the "completed" class
    const firstTodo = screen.getByText('Learn React fundamentals').closest('li');
    expect(firstTodo).toHaveClass('completed');
  });

  // ── Test 3: Adding a Todo ─────────────────────────────────────────────────────
  // Simulates typing into the input and clicking "Add Todo".
  // Verifies the new todo text appears in the list.
  it('adds a new todo when the form is submitted', () => {
    render(<TodoList />);

    // Find the input by its aria-label
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add Todo');

    // Simulate user typing
    fireEvent.change(input, { target: { value: 'Buy groceries' } });
    // Simulate form submission via button click
    fireEvent.click(addButton);

    // New todo should now appear in the rendered list
    expect(screen.getByText('Buy groceries')).toBeInTheDocument();

    // Input should be cleared after submission
    expect(input.value).toBe('');
  });

  // ── Test 4: Does Not Add Empty Todo ──────────────────────────────────────────
  // Verifies that submitting a blank or whitespace-only input is ignored.
  it('does not add a todo when input is empty', () => {
    render(<TodoList />);

    const addButton = screen.getByText('Add Todo');

    // Button should be disabled when input is empty
    expect(addButton).toBeDisabled();

    // List should still have only the 3 initial items
    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems).toHaveLength(3);
  });

  // ── Test 5: Toggling a Todo ───────────────────────────────────────────────────
  // Clicks on an incomplete todo and verifies it becomes completed.
  // Then clicks again and verifies it becomes incomplete.
  it('toggles a todo between completed and not completed', () => {
    render(<TodoList />);

    // "Understand React hooks" starts as NOT completed
    const todoText = screen.getByText('Understand React hooks');
    const todoItem = todoText.closest('li');

    // Initially not completed
    expect(todoItem).not.toHaveClass('completed');

    // Click the todo text span to toggle
    fireEvent.click(todoText);

    // Now it should be completed
    expect(todoItem).toHaveClass('completed');

    // Click again to toggle back
    fireEvent.click(todoText);

    // Back to not completed
    expect(todoItem).not.toHaveClass('completed');
  });

  // ── Test 6: Toggling Already-Completed Todo ───────────────────────────────────
  // "Learn React fundamentals" starts completed — clicking should un-complete it.
  it('toggles a completed todo back to incomplete', () => {
    render(<TodoList />);

    const todoText = screen.getByText('Learn React fundamentals');
    const todoItem = todoText.closest('li');

    // Starts as completed
    expect(todoItem).toHaveClass('completed');

    // Click to un-complete
    fireEvent.click(todoText);

    expect(todoItem).not.toHaveClass('completed');
  });

  // ── Test 7: Deleting a Todo ───────────────────────────────────────────────────
  // Clicks the delete button next to a specific todo.
  // Verifies that todo is removed from the DOM.
  it('deletes a todo when the delete button is clicked', () => {
    render(<TodoList />);

    // Confirm the todo exists before deletion
    expect(screen.getByText('Understand React hooks')).toBeInTheDocument();

    // Find the delete button by its aria-label
    const deleteButton = screen.getByRole('button', {
      name: 'Delete: Understand React hooks',
    });

    fireEvent.click(deleteButton);

    // Todo should no longer be in the document
    expect(screen.queryByText('Understand React hooks')).not.toBeInTheDocument();

    // Other todos should still be present
    expect(screen.getByText('Learn React fundamentals')).toBeInTheDocument();
    expect(screen.getByText('Write tests with Jest')).toBeInTheDocument();
  });

  // ── Test 8: Delete Reduces List Count ────────────────────────────────────────
  // Verifies the total number of todos decreases after deletion.
  it('reduces the todo count after deletion', () => {
    render(<TodoList />);

    // Initially 3 todos
    expect(screen.getAllByRole('listitem')).toHaveLength(3);

    const deleteButton = screen.getByRole('button', {
      name: 'Delete: Write tests with Jest',
    });

    fireEvent.click(deleteButton);

    // Now 2 todos
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });

  // ── Test 9: Add Then Delete ───────────────────────────────────────────────────
  // Integration test: adds a todo, then immediately deletes it.
  it('can add and then delete a todo', () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText('Add a new todo...');
    fireEvent.change(input, { target: { value: 'Temporary task' } });
    fireEvent.click(screen.getByText('Add Todo'));

    // Confirm it was added
    expect(screen.getByText('Temporary task')).toBeInTheDocument();

    // Delete it
    const deleteButton = screen.getByRole('button', {
      name: 'Delete: Temporary task',
    });
    fireEvent.click(deleteButton);

    // Confirm it was removed
    expect(screen.queryByText('Temporary task')).not.toBeInTheDocument();
  });

});