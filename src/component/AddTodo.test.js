import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddTodo from '../component/AddTodo';

describe('AddTodo component', () => {
  test('adds a task when the add button is clicked', () => {
    const addTodo = jest.fn();
    render(<AddTodo addTodo={addTodo} todos={[]} />);

    const input = screen.getByLabelText(/Add New Item/i);
    const addButton = screen.getByTestId('new-item-button');

    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(addButton);

    expect(addTodo).toHaveBeenCalledWith({ content: 'New Task', date: expect.any(String) });
  });

  test('does not add blank tasks', () => {
    const addTodo = jest.fn();
    render(<AddTodo addTodo={addTodo} todos={[]} />);

    const input = screen.getByLabelText(/Add New Item/i);
    const addButton = screen.getByTestId('new-item-button');

    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(addButton);

    expect(addTodo).not.toHaveBeenCalled();
  });

  test('does not add duplicate tasks', () => {
    const addTodo = jest.fn();
    const todos = [{ content: 'Task', date: '6/16/2024, 1:31:59 PM' }];
    render(<AddTodo addTodo={addTodo} todos={todos} />);

    const input = screen.getByLabelText(/Add New Item/i);
    const addButton = screen.getByTestId('new-item-button');

    fireEvent.change(input, { target: { value: 'Task' } });
    fireEvent.click(addButton);

    expect(addTodo).not.toHaveBeenCalled();
  });
});
