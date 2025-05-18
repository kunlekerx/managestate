import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onDelete, onToggle, onUpdate }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}

export default TaskList;
