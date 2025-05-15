// This test file contains four test cases for a TodoList component. 
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList.js';
//ఈ టెస్ట్‌ కేవలం TodoList అనే component లో కొత్త టుడో (todo item) సరిగా జోడవుతుందా లేదా అన్నదాన్ని పరీక్షిస్తుంది.
describe('TodoList Component',() => {
    test('adds a new todo', () => {
        // 👉 TodoList అనే component‌ను virtual DOM లో render చేస్తుంది, అంటే actual browser లో కాకుండా simulate చేసిన DOM లో.
        render(<TodoList />);
        screen.debug();
    
        // 👉 టెస్టు చేయాలంటే form elements ను locate చేయాలి.
        // input ని placeholder ఆధారంగా కనుగొంటుంది.
        // button ని "Add" అనే visible text ఆధారంగా కనుగొంటుంది.
        const input = screen.getByPlaceholderText('Add a new todo'); // So, input variable now refers to that HTML input DOM element.
        const button = screen.getByText('Add');
        //  Simulate User Actions:
        //          { target: { value: 'New todo' } } అనే object ద్వారా మీరు ఇన్‌పుట్ యొక్క value ప్రాపర్టీని 'New todo' గా మార్చమని simulate చేస్తున్నారు.
        //          ఈ event trigger అవగానే, ఆ input element కి attach చేసిన onChange event handler (లేదా state update function) కూడా పనిచేస్తుంది.
        fireEvent.change(input, { target: { value: 'New todo' } });
        // ఇది యూజర్ "Add" బటన్ మీద click చేసినట్టు simulate చేస్తుంది.
        fireEvent.click(button);
        // 👉 చివరగా, 'New todo' అనే టెక్స్ట్ DOM లో render avuthunda అని చెక్ చేస్తుంది.
        // ➡️ ఇది vunte: కొత్త Todo list లో సక్సెస్‌ఫుల్‌గా జోడించబడింది ani నిర్ధారిస్తుంది.
        expect(screen.getByText('New todo')).toBeInTheDocument();
    });
    /*  Test: 
        Finds the checkbox associated with the new todo.Simulates clicking the checkbox.
        Checks if the checkbox is now checked, confirming the todo was marked as complete */
    test('marks a todo as complete', () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText('Add a new todo');
        const addButton = screen.getByText('Add');
        fireEvent.change(input, { target: { value: 'New todo' } });
        fireEvent.click(addButton);
        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);
        expect(checkbox).toBeChecked();
    });
    /*  Test: 
        Finds the “Delete” button associated with the new todo.Simulates clicking the delete button
        Checks if “New todo” is no longer in the document, confirming the todo was deleted*/
    test('deletes a todo', () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText('Add a new todo');
        const addButton = screen.getByText('Add');
        fireEvent.change(input, { target: { value: 'New todo' } });
        fireEvent.click(addButton);
        const deleteButton = screen.getByText('Delete');
        fireEvent.click(deleteButton);
        expect(screen.queryByText('New todo')).not.toBeInTheDocument();
    });
    /* Test: 
        Adds two todo items: “Todo 1” and “Todo 2”.Marks “Todo 1” as complete by clicking its checkbox
        Finds and clicks the “Active” filter button.Checks if “Todo 1” (completed) is no longer visible
        Checks if “Todo 2” (active) is still visible */
    test('filters todos', () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText('Add a new todo');
        const addButton = screen.getByText('Add');
        fireEvent.change(input, { target: { value: 'Todo 1' } });
        fireEvent.click(addButton);
        fireEvent.change(input, { target: { value: 'Todo 2' } });
        fireEvent.click(addButton);
        const firstCheckbox = screen.getAllByRole('checkbox')[0];
        fireEvent.click(firstCheckbox);
        const activeFilterButton = screen.getByText('Active');
        fireEvent.click(activeFilterButton);
        expect(screen.queryByText('Todo 1')).not.toBeInTheDocument();
        expect(screen.getByText('Todo 2')).toBeInTheDocument();
    });
});
/*
These tests cover the main functionality of the TodoList component:

Adding new todos
Marking todos as complete
Deleting todos
Filtering todos based on their status (active/completed)
*/