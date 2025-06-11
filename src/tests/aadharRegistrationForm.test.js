import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AadharForm from '../components/aadharRegistrationForm';
import axios from 'axios';

// Mock axios
jest.mock('axios');

describe('AadharForm Component', () => {
  beforeEach(() => {
    axios.get.mockResolvedValueOnce({ data: [{ id: 1 }] }); // mock GET request
    axios.post.mockResolvedValueOnce({ data: {
        id: 1,
        name: 'Indraja',
        aadharNumber: '123456789012',
        phone: '9876543210',
        address: 'Kadapa',
      } }); // mock POST request
  });

  test('renders form fields correctly', () => {
    render(<AadharForm />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/aadhar number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/address/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  test('shows validation errors when submitting empty form', async () => {
    render(<AadharForm />);
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/aadhar number is required/i)).toBeInTheDocument();
      expect(screen.getByText(/phone is required/i)).toBeInTheDocument();
      expect(screen.getByText(/address is required/i)).toBeInTheDocument();
    });
  });

  test('shows error for invalid aadhar and phone numbers', async () => {
    render(<AadharForm />);

    fireEvent.change(screen.getByLabelText(/aadhar number/i), { target: { value: '123' } });
    fireEvent.change(screen.getByLabelText(/phone number/i), { target: { value: 'abc' } });

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      expect(screen.getByText(/aadhar number must be 12 digits/i)).toBeInTheDocument();
      expect(screen.getByText(/phone must be 10 digits/i)).toBeInTheDocument();
    });
  });

  test('submits form with valid data and shows success alert', async () => {
    window.alert = jest.fn(); // Mock alert

    render(<AadharForm />);

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/aadhar number/i), { target: { value: '123456789012' } });
    fireEvent.change(screen.getByLabelText(/phone number/i), { target: { value: '9876543210' } });
    fireEvent.change(screen.getByLabelText(/address/i), { target: { value: 'Hyderabad' } });

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.post).toHaveBeenCalledWith('http://localhost:3001/users', {
        id: 2,
        name: 'John Doe',
        aadharNumber: '123456789012',
        phone: '9876543210',
        address: 'Hyderabad'
      });
      expect(window.alert).toHaveBeenCalledWith('Aadhar Registered Successfully!');
    });
  });
});
