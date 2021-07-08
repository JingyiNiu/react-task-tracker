import React from "react";

import Button from "../Button/Button.component";

import "./TaskHeader.styles.css";

const TaskHeader = ({ title }) => {
  return (
    <div className='task-header'>
      <h2>{title}</h2>
      <Button text='+' />
    </div>
  );
};

export default TaskHeader;
