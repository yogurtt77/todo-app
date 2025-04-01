"use client"

import type React from "react"
import "../styles/TodoFilter.css"

type FilterType = "all" | "active" | "completed"

interface TodoFilterProps {
  filter: FilterType
  onFilterChange: (filter: FilterType) => void
}

const TodoFilter: React.FC<TodoFilterProps> = ({ filter, onFilterChange }) => {
  return (
    <div className="todo-filter">
      <button
        className={`filter-btn ${filter === "all" ? "selected" : ""}`}
        onClick={() => onFilterChange("all")}
        data-testid="filter-all"
      >
        All
      </button>
      <button
        className={`filter-btn ${filter === "active" ? "selected" : ""}`}
        onClick={() => onFilterChange("active")}
        data-testid="filter-active"
      >
        Active
      </button>
      <button
        className={`filter-btn ${filter === "completed" ? "selected" : ""}`}
        onClick={() => onFilterChange("completed")}
        data-testid="filter-completed"
      >
        Completed
      </button>
    </div>
  )
}

export default TodoFilter

