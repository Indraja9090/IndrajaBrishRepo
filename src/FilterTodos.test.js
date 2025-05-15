import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FilterTodos from './FilterTodos.js';
test('calls setFilter with correct argument when buttons are clicked', () => {
    const mockSetFilter = jest.fn();
    render(<FilterTodos setFilter={mockSetFilter} />);
    fireEvent.click(screen.getByText('All'));
    expect(mockSetFilter).toHaveBeenCalledWith('all');
    fireEvent.click(screen.getByText('Active'));
    expect(mockSetFilter).toHaveBeenCalledWith('active');
    fireEvent.click(screen.getByText('Completed'));
    expect(mockSetFilter).toHaveBeenCalledWith('completed');
});