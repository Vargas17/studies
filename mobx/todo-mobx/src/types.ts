export type Task = {
  id: string;
  name: string;
  status: 'done' | 'doing' | 'todo'
}