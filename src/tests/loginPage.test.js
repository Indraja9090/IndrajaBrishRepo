import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LoginPage from '../components/loginPage';

// Mock the fetch API
global.fetch = jest.fn();

describe('LoginPage', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it('shows validation errors if fields are empty', async () => {
    render(<LoginPage />);
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(await screen.findByText('Email is required')).toBeInTheDocument();
    expect(await screen.findByText('Password is required')).toBeInTheDocument();
  });

  it('sends form data to server and shows success message', async () => {
    fetch.mockResolvedValueOnce({ ok: true });

    render(<LoginPage />);
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: '123456' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith('http://localhost:3001/users', expect.anything());
      expect(screen.getByText('Login successful!')).toBeInTheDocument();
    });
  });

  it('shows failure message when API fails', async () => {
    fetch.mockResolvedValueOnce({ ok: false });

    render(<LoginPage />);
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'fail@example.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'wrong' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(await screen.findByText('Login failed. Try again.')).toBeInTheDocument();
  });
});