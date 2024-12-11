import { useState, useEffect } from 'react';
import { Todo } from '../types/todo';
import { loadTodos, saveTodos } from '../utils/storage';

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>(() => loadTodos());

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const addTodo = (text: string) => {
    setTodos([
      {
        id: crypto.randomUUID(),
        text,
        completed: false,
        createdAt: new Date()
      },
      ...todos
    ]);
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const stats = {
    total: todos.length,
    completed: todos.filter((todo) => todo.completed).length
  };

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    stats
  };
}