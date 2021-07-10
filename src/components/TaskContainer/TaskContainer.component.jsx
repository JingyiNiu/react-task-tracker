import React from "react";

import TaskHeader from "../TaskHeader/TaskHeader.component";
import Tasks from "../Tasks/Tasks.component";

import "./TaskContainer.styles.css";

const TaskContainer = () => {
  return (
    <div className='task-container'>
      <TaskHeader title={"Task Header"} />
      <Tasks/>
    </div>
  );
};

export default TaskContainer;
