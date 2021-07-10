import React from "react";

import Button from "../Button/Button.component";

import "./TaskHeader.styles.css";

const TaskHeader = ({ title, onAdd, showAdd }) => {
  return (
    <div className='task-header'>
      <h2>{title}</h2>
      <Button
        text={showAdd ? "x" : " +"}
        onClick={onAdd}
        color={showAdd ? 'orange':'salmon'}
      />
    </div>
  );
};

export default TaskHeader;
