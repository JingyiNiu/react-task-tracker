import React from "react";

import TaskHeader from "../TaskHeader/TaskHeader.component";

import "./TaskContainer.styles.css";

const TaskContainer = () => {
  return (
    <div class='task-container'>
      <TaskHeader title={"Task Header"} />
    </div>
  );
};

export default TaskContainer;
