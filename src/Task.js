import React, { useState } from "react";

const Task = ({ task, onDelete, onEdit }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.text);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    onEdit(task.id, editedTask);
    setEditing(false);
  };

  return (
    <div className="task">
      {isEditing ? (
        <div className="task-edit">
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div className="task-text">{task.text}</div>
      )}
      <div className="task-actions">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Task;