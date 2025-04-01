"use client"

import type React from "react"
import TodoItem from "./TodoItem"
import type { Todo } from "./TodoApp"
import "../styles/TodoList.css"

interface TodoListProps {
  todos: Todo[]
  onToggleTodo: (id: string) => void
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggleTodo }) => {
  if (todos.length === 0) {
    return null
  }

  return (
    <ul className="todo-list" data-testid="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggleTodo} />
      ))}
    </ul>
  )
}

export default TodoList

