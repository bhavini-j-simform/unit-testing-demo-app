import React from 'react';
import {fireEvent, render, screen } from '@testing-library/react';
import DisplayTodoList from './DisplayTodoList';

test('renders list of tasks', () => {
  const tasks = ['Task 1', 'Task 2', 'Task 3']; // Sample tasks data
  render(<DisplayTodoList tasks={tasks} />);

  const taskElements = tasks.map((task) => screen.getByText(task));
  taskElements.forEach((element) => {
    expect(element).toBeInTheDocument();
  });
});

test('renders empty list if no tasks provided', () => {
  render(<DisplayTodoList tasks={[]} />);
  const emptyListElement = screen.getByRole('list');
  expect(emptyListElement).toBeInTheDocument();
});

test('delete button removes task from the list', () => {
  const mockTasks = ['Task 1', 'Task 2', 'Task 3']; // Sample tasks data
  const onDeleteTask = jest.fn();
  render(<DisplayTodoList tasks={mockTasks} onDeleteTask={onDeleteTask} />);

  const deleteButtons = screen.getAllByText('Delete');
  expect(deleteButtons.length).toBe(mockTasks.length); // Ensure delete button for each task

  fireEvent.click(deleteButtons[1]); // Simulate clicking delete for the second task (index 1)
  expect(onDeleteTask).toHaveBeenCalledWith(1); // Check if onDeleteTask was called with the correct index
});