"use client"

import type React from "react"
import { useState } from "react"
import "../styles/TodoInput.css"

interface TodoInputProps {
  onAddTodo: (text: string) => void
}

const TodoInput: React.FC<TodoInputProps> = ({ onAddTodo }) => {
  const [text, setText] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      onAddTodo(text)
      setText("")
    }
  }

  return (
    <form className="todo-input-form" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        data-testid="new-todo-input"
      />
    </form>
  )
}

export default TodoInput

