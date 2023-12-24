import React from 'react';

const AddInput = ({ value, onChange, onAddTask }) => {
 
  const isInputEmpty = !value || value.trim() === '';

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter task..."
        className="input-field"
      />
      <button onClick={onAddTask} className="add-button" disabled={isInputEmpty}>
        Add Task
      </button>
    </div>
  );
};

export default AddInput;
