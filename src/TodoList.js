// src/TodoList.js
import React from "react";
import Task from "./Task";

const TodoList = ({ tasks, onDelete, onEdit }) => {
  return (
    <div className="todo-list">
      {tasks.length === 0 ? <h3 className="nothingMessage">No Pending Tasks to do</h3> : tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default TodoList;