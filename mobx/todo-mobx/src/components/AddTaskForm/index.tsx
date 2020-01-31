import React, { useState } from 'react';
import './style.css';

interface Props {
  onAddTask: (t: string) => void;
}

const AddTaskForm: React.FC<Props> = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  }

  return (
    <div>
      <label>
        Task name:
        <input value={taskName} onChange={onChangeName} />
      </label>
      <button onClick={() => onAddTask(taskName)}>Add Task</button>
    </div>
  );
}

export default AddTaskForm;
