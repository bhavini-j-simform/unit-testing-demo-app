import React, { useState } from 'react';
import './ToDoList.css';
import Header from './Header/Header';
import AddInput from './AddInput/AddInput';
import DisplayTodoList from './DisplayTodoList/DisplayTodoList';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-container">
      <Header />
      <AddInput
        value={inputValue}
        onChange={handleInputChange}
        onAddTask={handleAddTask}
      />
      <DisplayTodoList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
};

export default ToDoList;
