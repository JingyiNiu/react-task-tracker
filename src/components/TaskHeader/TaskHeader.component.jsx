import React from "react";

import Button from "../Button/Button.component";

import "./TaskHeader.styles.css";

const TaskHeader = ({ title }) => {
  return (
    <div className='task-header'>
      <h1>{title}</h1>
      <Button/>
    </div>
  );
};

export default TaskHeader;
