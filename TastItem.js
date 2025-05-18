import React, { useState } from "react";

function TaskItem({ task, onDelete, onToggle, onUpdate }) {
  const [editing, setEditing] = useState(false);
  const [editName, setEditName] = useState(task.name);
  const [editDesc, setEditDesc] = useState(task.description);

  const handleUpdate = () => {
    onUpdate({ ...task, name: editName, description: editDesc });
    setEditing(false);
  };

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      {editing ? (
        <>
          <input
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
          />
          <input
            value={editDesc}
            onChange={(e) => setEditDesc(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <button onClick={() => onToggle(task.id)}>
            {task.completed ? "Undo" : "Complete"}
          </button>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </>
      )}
    </div>
  );
}

export default TaskItem;
