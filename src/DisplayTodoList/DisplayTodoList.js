import React from 'react';

const DisplayTodoList = ({ tasks, onDeleteTask }) => {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <button onClick={() => onDeleteTask(index)} className="delete-button">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default DisplayTodoList;
