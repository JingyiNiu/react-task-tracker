import React from "react";

import Button from "../Button/Button.component";

import "./TaskHeader.styles.css";

const TaskHeader = ({ title, onAdd }) => {
  return (
    <div className='task-header'>
      <h2>{title}</h2>
      <Button text='+' onClick={onAdd} color='salmon'/>
    </div>
  );
};

export default TaskHeader;
