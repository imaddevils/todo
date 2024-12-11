import React from 'react';
import { ListTodo } from 'lucide-react';

interface TodoHeaderProps {
  completedCount: number;
  totalCount: number;
}

export function TodoHeader({ completedCount, totalCount }: TodoHeaderProps) {
  return (
    <div className="mb-8 text-center">
      <div className="flex items-center justify-center gap-2 mb-2">
        <ListTodo size={32} className="text-blue-500" />
        <h1 className="text-3xl font-bold text-gray-800">Todo App</h1>
      </div>
      <p className="text-gray-600">
        {completedCount} of {totalCount} tasks completed
      </p>
    </div>
  );
}