import React from "react";

import Button from "../Button/Button.component";

import "./TaskHeader.styles.css";

const TaskHeader = ({ title }) => {
  const onClick = () => {
    console.log("clicked");
  };

  return (
    <div className='task-header'>
      <h2>{title}</h2>
      <Button text='+' onClick={onClick} />
    </div>
  );
};

export default TaskHeader;
