/*
Let’s write a simple jest test for your Counter component using Jest and React Testing Library. 
This test will check if the component renders correctly and if the increment and decrement buttons work as expected.
*/
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import  Counter  from '../components/Counter.js';
describe('Counter Component', () => {
    // First Test Case
    test('renders initial count of 0', () => {
        render(<Counter />);
        screen.debug();
        const countElement = screen.getByText(/Counter: 0/i);
        expect(countElement).toBeInTheDocument();
    });
    // Second Test Case
    test('increments count when increment button is clicked', () => {
        render(<Counter />);
        const incrementButton = screen.getByText(/Increment/i);
        fireEvent.click(incrementButton);
        const countElement = screen.getByText(/Counter: 1/i);
        expect(countElement).toBeInTheDocument();
    });
    // Third Test Case
    test('decrements count when decrement button is clicked', () => {
        render(<Counter />);
        const decrementButton = screen.getByText(/Decrement/i);
        fireEvent.click(decrementButton);
        const countElement = screen.getByText(/Counter: -1/i);
        expect(countElement).toBeInTheDocument();
    });
    // Fourth Test Case
    test('correctly updates count with multiple clicks', () => {
        render(<Counter />);
        const incrementButton = screen.getByText(/Increment/i);
        const decrementButton = screen.getByText(/Decrement/i);
        fireEvent.click(incrementButton);
        fireEvent.click(incrementButton);
        fireEvent.click(decrementButton);
        const countElement = screen.getByText(/Counter: 1/i);
        expect(countElement).toBeInTheDocument();
    });
});

/*
This jest test case file does the following:

It imports the necessary testing utilities from react testing and the Counter component.
Jest uses a describe block to group related jest tests for the Counter component.
The first jest test case checks if the initial count is rendered as 0.
The second testcase clicks the increment button and checks if the count increases to 1.
The third test clicks the decrement button and checks if the count decreases to -1.
The fourth test performs multiple clicks on both buttons and checks if the final count is correct.
*/