"use client"

import type React from "react"
import TodoFilter from "./TodoFilter"
import "../styles/TodoFooter.css"

type FilterType = "all" | "active" | "completed"

interface TodoFooterProps {
  remainingCount: number
  filter: FilterType
  onFilterChange: (filter: FilterType) => void
  onClearCompleted: () => void
  hasCompletedTodos: boolean
}

const TodoFooter: React.FC<TodoFooterProps> = ({
  remainingCount,
  filter,
  onFilterChange,
  onClearCompleted,
  hasCompletedTodos,
}) => {
  return (
    <div className="todo-footer">
      <span className="todo-count" data-testid="items-left">
        {remainingCount} {remainingCount === 1 ? "item" : "items"} left
      </span>

      <TodoFilter filter={filter} onFilterChange={onFilterChange} />

      {hasCompletedTodos && (
        <button className="clear-completed" onClick={onClearCompleted} data-testid="clear-completed">
          Clear completed
        </button>
      )}
    </div>
  )
}

export default TodoFooter

