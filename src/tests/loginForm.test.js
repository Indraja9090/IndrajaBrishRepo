import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LoginForm from '../components/loginForm';

global.fetch = jest.fn();

describe('LoginForm - Email Syntax Validation', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it('shows email syntax error when user enters invalid email format', async () => {
    render(<LoginForm />);
    
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'invalid-email' }
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'password123' }
    });

    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(await screen.findByText(/must include only letters, numbers/i)).toBeInTheDocument();
  });

  it('adds user with new ID and shows success on valid input', async () => {
    fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => [{ id: 5, email: 'old@example.com', password: '123' }]
    }).mockResolvedValueOnce({ 
        ok: true,
        json: async () => ({ message: 'User added successfully' }) });

    render(<LoginForm />);
    
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'test@example.com' }
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'password123' }
    });

    fireEvent.click(screen.getByRole('button', { nsame: /login/i }));

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(2); // 1. get, 2. post
      expect(fetch).toHaveBeenLastCalledWith(
        'http://localhost:3001/users',
        expect.objectContaining({
          method: 'POST',
          body: JSON.stringify({
            id: 6,
            email: 'test@example.com',
            password: 'password123'
          })
        })
      );
      expect(screen.getByText('Login successful!')).toBeInTheDocument();
    });
  });
});