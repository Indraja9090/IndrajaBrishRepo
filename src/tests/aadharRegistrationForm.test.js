import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AadharForm from '../components/aadharRegistrationForm';
import axios from 'axios';

jest.mock('axios');

describe('AadharForm', () => {
  test('renders the form and submits data', async () => {
    axios.post.mockResolvedValueOnce({
      data: {
        id: 1,
        name: 'Indraja',
        aadharNumber: '123456789012',
        phone: '9876543210',
        address: 'Kadapa',
      },
    });

    render(<AadharForm />);

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Indraja' } });
    fireEvent.change(screen.getByLabelText(/aadhar number/i), { target: { value: '123456789012' } });
    fireEvent.change(screen.getByLabelText(/phone number/i), { target: { value: '9876543210' } });
    fireEvent.change(screen.getByLabelText(/address/i), { target: { value: 'Kadapa' } });

    fireEvent.click(screen.getByText(/submit/i));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith('http://localhost:3001/users', {
        name: 'Indraja',
        aadharNumber: '123456789012',
        phone: '9876543210',
        address: 'Kadapa',
      });
    });
  });

  test('shows validation errors', async () => {
    render(<AadharForm />);

    fireEvent.click(screen.getByText(/submit/i));

    expect(await screen.findByText(/name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/aadhar number is required/i)).toBeInTheDocument();
    expect(screen.getByText(/phone is required/i)).toBeInTheDocument();
    expect(screen.getByText(/address is required/i)).toBeInTheDocument();
  });
});
