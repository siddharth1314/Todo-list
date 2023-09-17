import React, { useState } from "react";
import TodoList from "./TodoList";
import "./App.css";
import { useNavigate } from "react-router-dom";

function TodoMain() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const Navigate = useNavigate(); 

  const addTask = () => {
    if (newTask.trim() !== "") {
      const newTaskObj = {
        id: new Date().getTime(),
        text: newTask,
      };
      setTasks([...tasks, newTaskObj]);
      console.log(newTaskObj.id)
      setNewTask("");
    }
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    console.log(updatedTasks)
    setTasks(updatedTasks);
  };

  const handleSignOut = () => {
    Navigate("/");
    alert("user Signed Out")
  }

  const editTask = (taskId, newText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <div className="add-task">
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <h1 className="checkList">checklist</h1>
      <TodoList tasks={tasks} onDelete={deleteTask} onEdit={editTask} />
      <button onClick={handleSignOut} className="signOut">Sign-out</button>
    </div>
  );
}

export default TodoMain;