import React from "react";

import TaskHeader from "../TaskHeader/TaskHeader.component";
import Tasks from "../Tasks/Tasks.component";
import AddTask from "../AddTask/AddTask.component";

import "./TaskContainer.styles.css";

const TaskContainer = ({
  tasks,
  onDelete,
  onToggle,
  onAdd,
  showAddTask,
  setShowAddTask,
}) => {
  return (
    <div className='task-container'>
      <TaskHeader
        title={"My Task"}
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={onAdd} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={onDelete} onToggle={onToggle} />
      ) : (
        <div className='no-task'>No task</div>
      )}
    </div>
  );
};

export default TaskContainer;
