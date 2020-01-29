import React from 'react';
import { Task } from '../../types';
import './style.css';

interface Props {
  title: string;
  tasks: Task[];
}

const AddTaskForm: React.FC<Props> = ({ title, tasks }) => {
  const renderTasks = () => tasks.map(task => (
    <div className='taskCard'>
      <span>{task.name}</span>
    </div>
  ));
  return (
    <div className='cardsContainer'>
      <h5>{title}</h5>
      {renderTasks()}
    </div>
  );
}

export default AddTaskForm;
