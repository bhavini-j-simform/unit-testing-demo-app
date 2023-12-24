import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import AddInput from './AddInput';

describe('AddInput Component', () => {
  test('renders input field and add button', () => {
    render(<AddInput />);
    const inputElement = screen.getByPlaceholderText('Enter task...');
    const addButton = screen.getByText('Add Task');

    expect(inputElement).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
    expect(addButton).toBeDisabled(); // Button should be initially disabled
  });

  test('disables button again when input field becomes empty', () => {
    render(<AddInput />);
    const inputElement = screen.getByPlaceholderText('Enter task...');
    const addButton = screen.getByText('Add Task');

    fireEvent.change(inputElement, { target: { value: '' } });
    expect(addButton).toBeDisabled(); // Button should be disabled again when input becomes empty
  });

  test('calls onAddTask when button is clicked and input is not empty', () => {
    const mockAddTask = jest.fn();
    render(<AddInput value="New Task" onChange={() => {}} onAddTask={mockAddTask} />);
    const addButton = screen.getByText('Add Task');

    fireEvent.click(addButton);
    expect(mockAddTask).toHaveBeenCalledTimes(1); // onAddTask should be called when button is clicked
  });

  test('renders input field with default value', () => {
    render(<AddInput value="Default Value" />);
    const inputElement = screen.getByDisplayValue('Default Value');
    expect(inputElement).toBeInTheDocument();
  });
});
