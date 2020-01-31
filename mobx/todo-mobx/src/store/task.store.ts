import { observable, computed, action } from "mobx";
import uuid from 'uuid';
import { Task } from '../types';

export class TaskStore {
  readonly tasks = observable<Task>([]);

  @computed
  get todoTasks(): Task[] {
    return this.tasks.filter(task => task.status === 'todo');
  }

  @computed
  get doingTasks(): Task[] {
    return this.tasks.filter(task => task.status === 'doing');
  }

  @computed
  get doneTasks(): Task[] {
    return this.tasks.filter(task => task.status === 'done');
  }

  @action
  add(name: string) {
    this.tasks.push({ id: uuid.v4(), name, status: 'todo' });
  }

  @action
  remove(task: Task) {
    this.tasks.remove(task);
  }

  @action
  move(task: Task) {
    task.status = task.status === 'todo'
      ? 'doing'
      : 'done';
  }
}

export const taskStore = new TaskStore();