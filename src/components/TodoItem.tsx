"use client"

import type React from "react"
import type { Todo } from "./TodoApp"
import "../styles/TodoItem.css"

interface TodoItemProps {
  todo: Todo
  onToggle: (id: string) => void
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle }) => {
  return (
    <li className="todo-item" data-testid="todo-item">
      <label className="todo-item-label">
        <input
          type="checkbox"
          className="todo-checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          data-testid="todo-checkbox"
        />
        <span className={`todo-text ${todo.completed ? "completed" : ""}`}>{todo.text}</span>
      </label>
    </li>
  )
}

export default TodoItem

