import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddTodo from '../components/AddTodo.js';
test('calls addTodo prop with input value when form is submitted', () => {
    const mockAddTodo = jest.fn();
    render(<AddTodo addTodo={mockAddTodo} />);
    screen.debug();
    const input = screen.getByPlaceholderText('Add a new todo');
    const button = screen.getByText('Add');
    fireEvent.change(input, { target: { value: 'New todo' } });
    fireEvent.click(button);
    expect(mockAddTodo).toHaveBeenCalledWith('New todo');
});
test('clears input after form submission', () => {
    render(<AddTodo addTodo={() => { }} />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const button = screen.getByText('Add');
    fireEvent.change(input, { target: { value: 'New todo' } });
    fireEvent.click(button);
    expect(input.value).toBe('');
});