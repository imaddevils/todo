import React from 'react';
import { TodoHeader } from './components/TodoHeader';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { useTodos } from './hooks/useTodos';

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo, stats } = useTodos();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto p-6">
        <TodoHeader
          completedCount={stats.completed}
          totalCount={stats.total}
        />
        <div className="space-y-6">
          <TodoInput onAdd={addTodo} />
          <TodoList
            todos={todos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;