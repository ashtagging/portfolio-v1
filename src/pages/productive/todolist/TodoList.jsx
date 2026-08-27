import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import MenuButton from "../../../components/menu-button/MenuButton";
import TodoItem from "./todoitem/TodoItem";
import "./todolist.scss";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "active", label: "Active" },
  { key: "completed", label: "Completed" },
];

function TodoList() {
  const [todoItem, setToDoItem] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    saveTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos]);

  const handleChange = (event) => {
    setToDoItem(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = todoItem.trim();
    if (!text) return;
    setTodos([...todos, { id: uniqid(), text, completed: false }]);
    setToDoItem("");
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  //Save to Local Storage
  const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.length - activeCount;
  const visibleTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="todo-list">
      <MenuButton />
      <div className="todo-wrapper">
        <div className="todo-container">
          <h1>To Do List</h1>
          <form onSubmit={handleSubmit}>
            <div className="input">
              <input
                type="text"
                placeholder="Please enter a to do item..."
                value={todoItem}
                onChange={handleChange}
                className="todo-input"
                aria-label="New to do item"
              />
              <button
                type="submit"
                className="todo-add"
                aria-label="Add to do item"
                disabled={!todoItem.trim()}
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          </form>

          {todos.length > 0 && (
            <div className="filter-tabs" role="tablist" aria-label="Filter to do items">
              {FILTERS.map(({ key, label }) => (
                <button
                  key={key}
                  role="tab"
                  aria-selected={filter === key}
                  className={filter === key ? "active" : ""}
                  onClick={() => setFilter(key)}
                >
                  {label}
                </button>
              ))}
            </div>
          )}

          <div className="list-container">
            {todos.length === 0 ? (
              <div className="empty-state">
                <i className="fa-regular fa-clipboard"></i>
                <p>Your list is empty. Add your first to do above!</p>
              </div>
            ) : visibleTodos.length === 0 ? (
              <div className="empty-state">
                <p>No {filter} items.</p>
              </div>
            ) : (
              <ul className="list-item">
                {visibleTodos.map((todo) => (
                  <TodoItem
                    todo={todo}
                    key={todo.id}
                    todos={todos}
                    setTodos={setTodos}
                  />
                ))}
              </ul>
            )}
          </div>

          {todos.length > 0 && (
            <div className="todo-footer">
              <span>
                {activeCount} item{activeCount !== 1 ? "s" : ""} left
              </span>
              <button
                onClick={clearCompleted}
                disabled={completedCount === 0}
                className="clear-completed"
              >
                Clear completed
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
