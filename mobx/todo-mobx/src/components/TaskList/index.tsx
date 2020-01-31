import React from 'react';
import { observer } from 'mobx-react';
import { Task } from '../../types';
import './style.css';

interface Props {
  title: string;
  tasks: Task[];
  onRemoveTask: (t: Task) => void;
  onMoveTask: (t: Task) => void;
}

const TaskList: React.FC<Props> = ({ title, tasks, onRemoveTask, onMoveTask }) => {
  const renderTasks = () => tasks.map(task => (
    <div key={task.id} className='taskCard'>
      <span>{task.name}</span>
      <div>
        {task.status !== 'done' && <button onClick={() => onMoveTask(task)} >move</button>}
        <button onClick={() => onRemoveTask(task)}>delete</button>
      </div>
    </div>
  ));
  return (
    <div className='cardsContainer'>
      <h5>{title}</h5>
      {renderTasks()}
    </div>
  );
}

export default observer(TaskList);
