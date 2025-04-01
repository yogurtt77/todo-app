"use client";

import type React from "react";
import { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";
import "../styles/TodoApp.css";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

type FilterType = "all" | "active" | "completed";

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [filter, setFilter] = useState<FilterType>("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    if (text.trim() !== "") {
      const newTodo: Todo = {
        id: Date.now().toString(),
        text: text.trim(),
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const remainingTodos = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="todo-app">
      <h1 className="todo-app-title">todos</h1>
      <div className="todo-app-container">
        <TodoInput onAddTodo={addTodo} />

        <TodoList todos={filteredTodos} onToggleTodo={toggleTodo} />

        {todos.length > 0 && (
          <TodoFooter
            remainingCount={remainingTodos}
            filter={filter}
            onFilterChange={setFilter}
            onClearCompleted={clearCompleted}
            hasCompletedTodos={todos.some((todo) => todo.completed)}
          />
        )}
      </div>
    </div>
  );
};

export default TodoApp;
