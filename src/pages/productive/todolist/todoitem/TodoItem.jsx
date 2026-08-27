import React, { useState, useRef, useEffect } from "react";
import "./todoitem.scss";

function TodoItem({ todo, todos, setTodos }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const editInputRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      editInputRef.current?.focus();
      editInputRef.current?.select();
    }
  }, [isEditing]);

  const deleteTodo = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeTodo = () => {
    setTodos(
      todos.map((item) =>
        item.id === todo.id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const startEdit = () => {
    setEditText(todo.text);
    setIsEditing(true);
  };

  const saveEdit = () => {
    const trimmed = editText.trim();
    if (!trimmed) {
      setEditText(todo.text);
      setIsEditing(false);
      return;
    }
    setTodos(
      todos.map((item) =>
        item.id === todo.id ? { ...item, text: trimmed } : item
      )
    );
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  const handleEditKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      saveEdit();
    } else if (event.key === "Escape") {
      cancelEdit();
    }
  };

  return (
    <li className={`todo ${todo.completed ? "completed" : ""}`}>
      <button
        onClick={completeTodo}
        className={`complete-button ${todo.completed ? "checked" : ""}`}
        aria-label={todo.completed ? "Mark as not complete" : "Mark as complete"}
        aria-pressed={todo.completed}
      >
        <i className="fa-solid fa-check"></i>
      </button>

      {isEditing ? (
        <input
          ref={editInputRef}
          type="text"
          className="todo-edit-input"
          value={editText}
          onChange={(event) => setEditText(event.target.value)}
          onBlur={saveEdit}
          onKeyDown={handleEditKeyDown}
          aria-label="Edit to do text"
        />
      ) : (
        <span
          className="todo-text"
          onDoubleClick={startEdit}
          title="Double-click to edit"
        >
          {todo.text}
        </span>
      )}

      <div className="todo-actions">
        {!isEditing && (
          <button
            onClick={startEdit}
            className="edit-button"
            aria-label="Edit to do item"
          >
            <i className="fa-solid fa-pen"></i>
          </button>
        )}
        <button
          onClick={deleteTodo}
          className="trash-button"
          aria-label="Delete to do item"
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
