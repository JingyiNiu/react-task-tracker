import React from "react";

import Task from "../Task/Task.component";

const Tasks = ({ tasks, onDelete }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default Tasks;
