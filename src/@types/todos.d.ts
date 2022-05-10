export type Todos = {};
export type Completed = false;

export type TodoList = {
  readonly todos: Todos[] | null;
  readonly completed: Completed;
};
