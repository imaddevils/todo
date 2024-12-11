import { Todo } from '../types/todo';

export function loadTodos(): Todo[] {
  try {
    const saved = localStorage.getItem('todos');
    if (saved) {
      return JSON.parse(saved).map((todo: any) => ({
        ...todo,
        createdAt: new Date(todo.createdAt)
      }));
    }
  } catch (error) {
    console.error('Error loading todos:', error);
  }
  return [];
}

export function saveTodos(todos: Todo[]): void {
  try {
    localStorage.setItem('todos', JSON.stringify(todos));
  } catch (error) {
    console.error('Error saving todos:', error);
  }
}