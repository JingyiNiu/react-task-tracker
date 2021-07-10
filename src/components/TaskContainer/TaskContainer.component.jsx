import React from "react";

import TaskHeader from "../TaskHeader/TaskHeader.component";
import Tasks from "../Tasks/Tasks.component";

import "./TaskContainer.styles.css";

const TaskContainer = ({tasks, onDelete}) => {
  return (
    <div className='task-container'>
      <TaskHeader title={"Task Header"} />
      <Tasks tasks={tasks} onDelete={onDelete}/>
    </div>
  );
};

export default TaskContainer;
