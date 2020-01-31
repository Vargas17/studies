export type Task = {
  id: string;
  name: string;
  status: TaskStatus;
}

export type TaskStatus = 'done' | 'doing' | 'todo';