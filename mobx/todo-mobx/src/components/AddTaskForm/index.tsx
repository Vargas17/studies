import React, { useState } from 'react';
import './style.css';


const AddTaskForm: React.FC = () => {
  const [taskName, setTaskName] = useState('');

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  }
  const onAdd = () => {
    console.log(taskName);
  }
  return (
    <div>
      <label>
        Task name:
        <input value={taskName} onChange={onChangeName} />
      </label>
      <button onClick={onAdd}>Add Task</button>
    </div>
  );
}

export default AddTaskForm;
