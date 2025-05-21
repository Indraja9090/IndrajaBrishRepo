import { render, screen, waitFor } from '@testing-library/react';
import UserList from '../components/useEffect-API-Fetching';

// Mock the global fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' }
      ]),
  })
);
// console.log(global.fetch)

afterEach(() => {
  fetch.mockClear(); // reset mock fetch for each test
});

test('renders user list from API', async () => {
  render(<UserList />);
  console.log(fetch)
  console.log(fetch.mock.calls) // inspect what was passed to the mock.
  // Check the heading is there immediately
  expect(screen.getByText(/User List \(from JSON Server\)/i)).toBeInTheDocument();

  // Wait for the users to load and appear
  await waitFor(() => {
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
  });

  // Confirm fetch was called correctly
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith('http://localhost:3001/users');
});
