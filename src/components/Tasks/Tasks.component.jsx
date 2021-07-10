import React from "react";
const tasks = [
  { id: 1, text: "buy milk", day: "Feb 1st at 10:00am", reminder: false },
  {id: 2, text: "go doctor", day: "Feb 2nd at 2:30pm", reminder: true},
  {id: 3, text: "pick up Tom", day: "Feb 1st at 8:00pm", reminder: true},
];
const Tasks = () => {
  return <div>
  {tasks.map((task)=>(<h3 key={task.id}>{task.text}</h3>))}
  </div>;
};

export default Tasks;
