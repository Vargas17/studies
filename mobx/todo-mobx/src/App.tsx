import React, { Component } from 'react';
import { observer } from 'mobx-react'
import { AddTaskForm, TaskList } from './components';
import { taskStore } from './store';
import './App.css';

@observer
class App extends Component {
  render() {
    return (
      <div className='App'>
        <h3>MOBX TODO</h3>
        <AddTaskForm onAddTask={(taskName) => taskStore.add(taskName)} />
        <TaskList
          title='Todo'
          tasks={taskStore.todoTasks}
          onMoveTask={(task) => taskStore.move(task)}
          onRemoveTask={(task) => taskStore.remove(task)}
        />
        <TaskList
          title='Doing'
          tasks={taskStore.doingTasks}
          onMoveTask={(task) => taskStore.move(task)}
          onRemoveTask={(task) => taskStore.remove(task)}
        />
        <TaskList
          title='Done'
          tasks={taskStore.doneTasks}
          onMoveTask={(task) => taskStore.move(task)}
          onRemoveTask={(task) => taskStore.remove(task)}
        />
      </div>
    );
  }
}

export default App;
