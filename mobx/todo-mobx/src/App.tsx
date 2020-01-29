import React from 'react';
import { AddTaskForm, TaskList } from './components';
import { Task } from './types';
import './App.css';

const data: Task[] = [
  {
    "id": "1",
    "name": "Do stuff",
    "status": "doing"
  },
  {
    "id": "2",
    "name": "enjoy more stuff",
    "status": "done"
  },
  {
    "id": "3",
    "name": "finish errands",
    "status": "todo"
  }
]

const App: React.FC = () => {
  return (
    <div className='App'>
      <h3>MOBX TODO</h3>
      <AddTaskForm />
      <TaskList title='Todo' tasks={data} />
    </div>
  );
}

export default App;
