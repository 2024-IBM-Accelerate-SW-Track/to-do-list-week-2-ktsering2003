import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddTodo from './component/AddTodo';

test('renders AddTodo component', () => {
  render(<AddTodo addTodo={() => {}} />);
  const inputElement = screen.getByLabelText(/Add New Item/i);
  expect(inputElement).toBeInTheDocument();
});

test('adds a task when the add button is clicked', () => {
  const addTodo = jest.fn();
  render(<AddTodo addTodo={addTodo} />);

  fireEvent.change(screen.getByLabelText(/Add New Item/i), { target: { value: 'New Task' } });
  const addButton = screen.getByTestId('new-item-button');
  fireEvent.click(addButton);

  expect(addTodo).toHaveBeenCalledWith({ content: 'New Task', date: expect.any(String) });
});

test('does not add blank tasks', () => {
  const addTodo = jest.fn();
  render(<AddTodo addTodo={addTodo} />);

  fireEvent.change(screen.getByLabelText(/Add New Item/i), { target: { value: '' } });
  const addButton = screen.getByTestId('new-item-button');
  fireEvent.click(addButton);

  expect(addTodo).not.toHaveBeenCalled();
});

test('does not add duplicate tasks', () => {
  const addTodo = jest.fn();
  const tasks = [{ content: 'Task', date: 'some date' }];
  const checkDuplicate = (newTask) => !tasks.some(task => task.content === newTask.content);

  render(<AddTodo addTodo={task => {
    if (checkDuplicate(task)) {
      addTodo(task);
    }
  }} />);

  fireEvent.change(screen.getByLabelText(/Add New Item/i), { target: { value: 'Task' } });
  const addButton = screen.getByTestId('new-item-button');
  fireEvent.click(addButton);

  fireEvent.change(screen.getByLabelText(/Add New Item/i), { target: { value: 'Task' } });
  fireEvent.click(addButton);

  expect(addTodo).toHaveBeenCalledTimes(1);
});
